<script>
  import { Collection } from "sveltefire"
  import { filteredTours } from "../store.js"

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

  function searchQuery(query, tours) {
    window.clearTimeout(timer)
    timer = window.setTimeout(function () {
      const results = filterTours(query, tours)
      filteredTours.set([...results])
      DEBUG && console.log("=== TOURSEARCH: store", $filteredTours)
    }, SEARCH_TIMEOUT)
  }

  let query = ""
</script>

<Collection path={"Tours"} let:data={tours}>
  <div class="pt-16">
    SEARCH
    <input
      class="border-2 rounded"
      bind:value={query}
      on:input={() => searchQuery(query, tours)}
    />
  </div>
</Collection>

<!-- <div class="w-full md:h-20 sm:h-82 m-auto pt-1.5 bg-dark-gray text-dark-gray">
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

        <input
          class="text-main-input placeholder-gray-400 placeholder-opacity-75 w-full  h-14 px-3.5 rounded-lg"
          placeholder="Куда"
          bind:value={selectedDest}
        /> -->

<!-- TODO: 180 дней ограничение -->
<!-- FIXME доделать стилизацию -->
<!-- Непонятно как стилизовать DatePicker -->

<!-- <div class="flex flex-row space-x-2 justify-center">
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
                ? "пассажир"
                : passenger <= 4
                ? "пассажира"
                : "пассажиров"}
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
</div> -->
