<script>
  export let flight;

  import { dictionaries } from "../store.js";

  const {
    departureDate,
    destination,
    origin,
    price,
    returnDate,
    passangers,
  } = flight;

  const { currencies, locations } = $dictionaries;
</script>

<!-- <div>
  <div class="card-title">Рейс</div>
  <div class="">
    {locations[origin]["detailedName"]} ({locations[origin]["subType"]}) => {locations[
      destination
    ]["detailedName"]} ({locations[destination]["subType"]})
  </div>
  <div class="">вылет в {departureDate}</div>
  <div class="">обратно в {returnDate}</div>
  <div><button>{price.total} {currencies["EUR"]}</button></div>
</div> -->

<div class="sm:max-w-screen-xl 
            flex flex-row 
            m-auto mt-56 
            w-210 h-62.5 rounded-3xl 
            items-center 
            bg-dark-gray text-pale-white">

  <div class="w-40 h-64">
      <div class="w-full text-center pt-28 align-middle">Logo</div> 
  </div>

  <div class="flex flex-col p-2">

    <div class="flex flex-row">

      <div class="p-2">
        <span class="block">5:35</span>
        koltsovo
      </div>

      <div class="p-2">2:35</div>

      <div class="p-2">
        <span>5:35</span>
        koltsovo
      </div>

    </div>

    <div>obratno</div>

  </div>

  <div class="cursor-pointer"><button>6666 Р</button></div>

</div>

<div class="sm:max-w-screen-xl 
            flex flex-row 
            m-auto mt-56 
            w-210 h-62.5 rounded-3xl 
            items-center 
            bg-dark-gray text-pale-white">

  <div class="w-40 h-64">
      <div class="w-full text-center pt-28 align-middle">Logo</div> 
  </div>

  <div class="flex flex-col p-2">

    <div class="flex flex-row">

      <div class="p-2">
        <span class="block">5:35</span>
        koltsovo
      </div>

      <div class="p-2">2:35</div>

      <div class="p-2">
        <span>5:35</span>
        koltsovo
      </div>

    </div>

    <div>obratno</div>

  </div>

  <div class="cursor-pointer"><button>6666 Р</button></div>

</div>