import { config } from "../config.js"
import { access_token, expiration, flights, dictionaries } from "../store.js"

const DEBUG = true

let $access_token = ''
let $expiration = 0

access_token.subscribe(value => {
  $access_token = value
})

expiration.subscribe(value => {
  $expiration = value
})

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear()
  if (month.length < 2) month = "0" + month
  if (day.length < 2) day = "0" + day

  return [year, month, day].join("-")
}

const getToken = async () => {
  let current_time = new Date().getTime()

  if (!!$access_token && new Date($expiration).getTime() > current_time) return $access_token

  let response = await fetch(
    `https://test.api.amadeus.com/v1/security/oauth2/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${config.client_id}&client_secret=${config.client_secret}`,
    }
  )
  let json = await response.json()

  let new_expiration = current_time + json.expires_in * 1000

  access_token.set(json.access_token)
  expiration.set(new_expiration.toString())
  
  return $access_token
}


// IATA airport codes https://en.wikipedia.org/wiki/IATA_airport_code
const getFlights = async (origin, destination, departureDate, arrivalDate, adults) => {

  let access_token = await getToken()

  // duration=${
  //   Math.floor(
  //     Math.abs(
  //       (arrivalDate.getTime() - departureDate.getTime()) / 1000 / 3600 / 24
  //     )
  //   ) + 1
  // }

  // TODO add fields https://developers.amadeus.com/self-service/category/air/api-doc/flight-offers-search/api-reference
  let response = await fetch(
    `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${formatDate(departureDate)}&adults=${adults}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  )
  let json = await response.json()
  console.log(json)
  // FIXME: проверять статус и наличие data
  let data = json.data

  flights.set([...data])
  dictionaries.set(json.dictionaries)
}

const orderFlight = async (offer) => {

  let access_token = await getToken()

  let response = await fetch(
    `https://test.api.amadeus.com/v2/booking/flight-orders`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      body: {data: JSON.stringify(offer)}
    }
  )
  let json = await response.json()
  console.log(json)
  // FIXME: проверять статус и наличие data
  let data = json.data

  bookedFlights.set([...data])
}

export {getFlights, orderFlight}