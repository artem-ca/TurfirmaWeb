const testFlights = [
  {
    departureDate: '2021-06-07',
    destination: 'MAD',
    links: {
      flightDates:
        'https://test.api.amadeus.com/v1/shopping/flight-da…p=false&maxPrice=200&currency=EUR&viewBy=DURATION',
      flightOffers:
        'https://test.api.amadeus.com/v2/shopping/flight-of…&adults=1&nonStop=false&maxPrice=200&currency=EUR',
    },
    origin: 'PAR',
    price: { total: '76.89' },
    returnDate: '2021-06-08',
    type: 'flight-destination',
  },
  {
    departureDate: '2021-06-09',
    destination: 'MAD',
    links: {
      flightDates:
        'https://test.api.amadeus.com/v1/shopping/flight-da…p=false&maxPrice=200&currency=EUR&viewBy=DURATION',
      flightOffers:
        'https://test.api.amadeus.com/v2/shopping/flight-of…&adults=1&nonStop=false&maxPrice=200&currency=EUR',
    },
    origin: 'PAR',
    price: { total: '76.89' },
    returnDate: '2021-06-08',
    type: 'flight-destination',
  },
]

export {testFlights}