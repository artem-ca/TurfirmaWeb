<script>
  // @ts-nocheck

  import { config } from '../config.js'
  import { access_token, expiration, flights, dictionaries } from '../store.js'
  import DatePicker from 'svelte-calendar'

  const getToken = async () => {
    let current_time = new Date().getTime()

    if (!$access_token || new Date($expiration).getTime() < current_time) {
      console.log('=== getToken(): getting new access_token')

      let response = await fetch(
        `https://test.api.amadeus.com/v1/security/oauth2/token`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `grant_type=client_credentials&client_id=${config.client_id}&client_secret=${config.client_secret}`,
        }
      )
      let json = await response.json()

      let new_expiration = current_time + json.expires_in * 1000

      access_token.set(json.access_token)
      expiration.set(new_expiration.toString())
    }
    return $access_token
  }

  const getFlights = async (origin, price) => {
    console.log('=== getFlights(): origin = ', origin)
    let access_token = await getToken()

    let response = await fetch(
      `https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=${origin}&maxPrice=${price}&departureDate=${formatDate(
        departureDate
      )}&duration=${
        Math.floor(
          Math.abs(
            (arrivalDate.getTime() - departureDate.getTime()) / 1000 / 3600 / 24
          )
        ) + 1
      }`,
      {
        method: 'GET',
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

  // TODO: выводить доступные аэропорты
  const origins = ['PAR', 'MAD']
  const destinations = ['PAR', 'MAD']
  const passengers = [1, 2, 3, 4, 5, 6]
  const nights = [1, 2, 4, 6, 8, 10]

  let selectedOrigin = ''
  let selectedDest = ''
  let selectedPassenger = passengers[0]
  let selectedNights = nights[0]
  let price = 0

  // ****** Dates Selection ***********
  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
  }

  let departureDate = new Date()
  let arrivalDate = new Date()
  // maxDate: (function(){
  //   var date = new Date();
  //   date.setDate(date.getDate() + 10);
  //   return date;
  // })
  let arrivalChosen = false
</script>

<div class="w-full md:h-20 sm:h-82 m-auto pt-1.5 bg-dark-gray text-dark-gray">
  <div class="md:max-w-screen-xl md:flex m-auto pt-1">
    <div class="md:flex md:w-full mx-5 ">
      <div
        class="md:flex-shrink-0 md:flex md:w-full md:space-x-2 md:space-y-0 sm:space-y-2 "
      >
        <input
          class="text-main-input placeholder-gray-400 placeholder-opacity-75 w-full  h-14 px-3.5 rounded-lg"
          placeholder="Откуда"
          bind:value={selectedOrigin}
        />

        <input
          class="text-main-input placeholder-gray-400 placeholder-opacity-75 w-full  h-14 px-3.5 rounded-lg"
          placeholder="Куда"
          bind:value={selectedDest}
        />

        <!-- TODO: 180 дней ограничение -->
        <!-- FIXME доделать стилизацию -->
        <!-- Непонятно как стилизовать DatePicker -->

        <div class="flex flex-row space-x-2 justify-center">
          <div class="">
            <DatePicker start={new Date()} bind:selected={departureDate}>
              <button class="bg-white md:w-56 sm:w-64 xs:w-34 h-14 rounded-lg ">
                {formatDate(departureDate)}
              </button>
            </DatePicker>
          </div>
        </div>

        <select
          class="text-main-input w-full h-14 p-3.5 rounded-lg cursor-pointer"
          bind:value={selectedNights}
        >
          {#each nights as night}
            <option>
              {night}
            </option>
          {/each}
        </select>

        <select
          class="text-main-input w-full h-14 p-3.5 rounded-lg cursor-pointer"
          bind:value={selectedPassenger}
        >
          {#each passengers as passenger}
            <option>
              {passenger}
              {passenger <= 1
                ? 'пассажир'
                : passenger <= 4
                ? 'пассажира'
                : 'пассажиров'}
            </option>
          {/each}
        </select>

        <button
          class="bg-red-600 hover:bg-red-500 active:bg-red-400 
                        focus:outline-none 
                        w-full h-14 rounded-lg cursor-pointer 
                        text-main-input font-bold"
        >
          Найти
        </button>
      </div>
    </div>
  </div>
</div>
