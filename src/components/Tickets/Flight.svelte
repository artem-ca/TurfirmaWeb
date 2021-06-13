<script>
  export let flight

  import { dictionaries } from "../store.js"
  import { orderFlight } from "./amadeus.js"

  // const { departureDate, destination, origin, price, returnDate, passangers } =
  //   flight

  // const { currencies, locations } = $dictionaries

  console.log("=== FLIGHT: ", flight)

  let background = "img/ural_arilines.png"
</script>

<div class="mt-18">
  <div class="card-title">Рейс</div>
  <!-- <div>{flight.price.total} {flight.price.currency}</div> -->
  <button on:click={orderFlight}>Забронировать</button>
</div>

<!-- <div
  class="sm:max-w-screen-md h-62.5
         m-auto my-10 rounded-3xl
        bg-dark-gray text-pale-white
        flex cursor-pointer relative"
>
  <div class="flex h-full items-center">
    <div
      class="bg-red-500 mx-7  rounded-md 
     bg-local bg-cover"
      style="background-image: url('{background}')"
    >
      <div class="p-8 text-center text-transparent">logo</div>
    </div>
  </div>

  <div
    class="flex flex-col space-y-10 justify-center font-montserrat text-sm text-pale-white"
  >
    <div class="flex flex-row">
      <div class="flex flex-col text-left w-18">
        <span class="text-2xl text-red-500 ">05:35</span>
        <span>Кольцово</span>
        <span>SVX</span>
      </div>

      <div class="my-4 mx-4 border-t text-strange-gray text-xs">ssssssss</div>

      <span class="text-sm my-2 text-red-500 ">2ч35мин</span>

      <div class="my-4 mx-4 border-t text-strange-gray text-xs">ssssssss</div>

      <div class="flex flex-col text-left text-sm w-18">
        <span class="text-2xl  text-red-500">06:10</span>
        <span>Домодедово</span>
        <span>DME</span>
      </div>
    </div>

    <div class="flex flex-row">
      <div class="flex flex-col text-left w-18">
        <span class="text-2xl  text-red-500">05:35</span>
        <span>Домодедово</span>
        <span>DME</span>
      </div>

      <div class="my-4 mx-4 border-t text-strange-gray text-xs">ssssssss</div>

      <span class="text-sm my-2 text-red-500">2ч35мин</span>

      <div class="my-4 mx-4 border-t text-strange-gray text-xs">ssssssss</div>

      <div class="flex flex-col text-left w-18">
        <span class="text-2xl  text-red-500">05:35</span>
        <span>Кольцово</span>
        <span>SVX</span>
      </div>
    </div>
  </div>

  <div class="w-7 h-full ml-10 bg-red-500" />

  <div class="flex flex-col w-full self-center">
    <button
      class="m-7 p-2  rounded-md 
      text-xl font-display
      bg-red-600 hover:bg-red-500 active:bg-red-400 "
    >
      6666 Р
    </button>
  </div>
</div> -->
