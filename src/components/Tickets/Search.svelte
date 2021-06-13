<script>
  import { getFlights } from "./amadeus"
  import DatePicker from "svelte-calendar"

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = "0" + month
    if (day.length < 2) day = "0" + day

    return [day, month, year].join(".")
  }

  // TODO: выводить доступные аэропорты
  const origins = ["PAR", "MAD"]
  const destinations = ["PAR", "MAD"]
  const passengers = [1, 2, 3, 4, 5, 6]

  let selectedOrigin = "SVX",
    selectedDestination = "PAR",
    selectedPassengers = passengers[0],
    price = 0

  // ****** Dates Selection ***********

  let departureDate = new Date()
  let arrivalDate = new Date()
  // maxDate: (function(){
  //   var date = new Date();
  //   date.setDate(date.getDate() + 10);
  //   return date;
  // })
  let arrivalChosen = false
</script>

<!-- TODO: Добавить спейсер между полями/подобрать правильный размер полей -->
<div class="w-full md:h-20 sm:h-82 m-auto pt-1.5 bg-dark-gray text-dark-gray">
  <div class="md:max-w-screen-xl md:flex m-auto pt-1">
    <div class="md:flex md:w-full mx-5">
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
          bind:value={selectedDestination}
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

          <div>
            <DatePicker
              start={departureDate}
              style="z-index: 50"
              bind:selected={arrivalDate}
              bind:dateChosen={arrivalChosen}
            >
              <button class="bg-white md:w-56 sm:w-64 xs:w-34 h-14  rounded-lg">
                {#if arrivalChosen}
                  {formatDate(arrivalDate)}
                {:else}
                  {formatDate(departureDate)}
                {/if}
              </button>
            </DatePicker>
          </div>
        </div>

        <select
          class="text-main-input w-full h-14 p-3.5 rounded-lg cursor-pointer"
          bind:value={selectedPassengers}
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
                      text-main-input font-bold"
          on:click={() =>
            getFlights(
              selectedOrigin,
              selectedDestination,
              departureDate,
              arrivalDate,
              selectedPassengers
            )}
        >
          Найти
        </button>
      </div>
    </div>
  </div>
</div>
