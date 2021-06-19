<script>
  import { Collection } from "sveltefire"
  import DatePicker from "svelte-calendar"
  import { bind } from "svelte/internal"
  import { tourists, passengers, nights, filteredTours } from "../store.js"

  const SEARCH_TIMEOUT = 1000
  const DEBUG = true

  DEBUG && console.log("=== TOURSEARCH: store updated ", $filteredTours)

  //TODO withConverter сократить данные
  const tourConverter = {
    fromFirestore: function ({ area, city, country, hotel, name }) {
      return { area, city, country, hotel, name }
    },
  }

  function filterTours(keyword, tours) {
    return tours.filter((element) => {
      const k = keyword.toLowerCase()
      // console.log()
      return (
        element.area.toLowerCase().includes(k) ||
        element.city.toLowerCase().includes(k) ||
        element.country.toLowerCase().includes(k) ||
        element.hotel.toLowerCase().includes(k) ||
        element.name.toLowerCase().includes(k)
      )
    })
  }

  let timer
  let date = new Date()

  function searchQuery(query, tours) {
    window.clearTimeout(timer)
    timer = window.setTimeout(function () {
      const results = filterTours(query, tours)
      filteredTours.set([...results])
      DEBUG && console.log("=== TOURSEARCH: store", $filteredTours)
    }, SEARCH_TIMEOUT)
  }

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = "0" + month
    if (day.length < 2) day = "0" + day

    return [day, month, year].join(".")
  }

  let query = ""

  const touristsList = [
    { value: 1, text: "1 турист" },
    { value: 2, text: "2 туристa" },
    { value: 3, text: "3 туристa" },
    { value: 4, text: "4 туристa" },
    { value: 5, text: "5 туристов" },
    { value: 6, text: "6 туристов" },
  ]
  const nightsList = [
    { value: 1, text: "1 ночь" },
    { value: 2, text: "2 ночи" },
    { value: 3, text: "3 ночи" },
    { value: 4, text: "4 ночи" },
    { value: 5, text: "5 ночей" },
    { value: 6, text: "6 ночей" },
  ]

  let selectedOrigin = "Екатеринбург"
  let selectedDest = ""
  let selectedPassenger = touristsList[0]
  let selectedNights = nightsList[0]
  let price = 0

  let departureDate = new Date()
  let arrivalDate = new Date()
</script>

<!-- <Collection path={"Tours"} let:data={tours}>
  <div class="pt-16">
    SEARCH
    <input
      class="border-2 rounded"
      bind:value={query}
      on:input={() => searchQuery(query, tours)}
    />
  </div>
</Collection> -->

<div class="w-full md:h-20 sm:h-82 m-auto pt-1.5 bg-dark-gray text-dark-gray">
  <div class="md:max-w-screen-xl md:flex m-auto pt-1 ">
    <div class="md:flex md:w-full mx-5 ">
      <div
        class="md:flex-shrink-0 md:flex md:w-full md:space-x-2 md:space-y-0 sm:space-y-2 "
      >
        <input
          class="text-main-input placeholder-gray-400 placeholder-opacity-75 w-full  h-14 px-3.5 rounded-lg"
          placeholder="Откуда"
          bind:value={selectedOrigin}
        />
        <Collection path={"Tours"} let:data={tours}>
          <input
            class="text-main-input placeholder-gray-400 placeholder-opacity-75 w-full  h-14 px-3.5 rounded-lg"
            placeholder="Куда"
            bind:value={query}
            on:input={() => searchQuery(query, tours)}
          />
        </Collection>

        <!-- TODO: 180 дней ограничение -->
        <!-- FIXME доделать стилизацию -->
        <!-- Непонятно как стилизовать DatePicker -->

        <div class="flex flex-row space-x-2 justify-center">
          <div class="">
            <DatePicker start={new Date()} bind:selected={departureDate}>
              <button
                class="bg-white md:w-56 sm:w-64 xs:w-34 h-14 rounded-lg z-50"
              >
                {formatDate(departureDate)}
              </button>
            </DatePicker>
          </div>
        </div>

        <!-- <div>
          <input class="w-full h-full rounded-md cursor-pointer" type="date" />
        </div> -->

        <select
          class="text-main-input w-full h-14 p-3.5 rounded-lg cursor-pointer"
          bind:value={$nights}
        >
          {#each nightsList as night}
            <option value={night.value}>
              {night.text}
            </option>
          {/each}
        </select>

        <select
          class="text-main-input w-full h-14 p-3.5 rounded-lg cursor-pointer"
          bind:value={$tourists}
        >
          {#each touristsList as tourist}
            <option value={tourist.value}>
              {tourist.text}
            </option>
          {/each}
        </select>

        <button
          class="bg-red-600 hover:bg-red-500 active:bg-red-400 
                        focus:outline-none 
                        w-full h-14 rounded-lg cursor-pointer 
                        text-main-input font-bold relative bling"
        >
          Найти
        </button>
      </div>
    </div>
  </div>
</div>
