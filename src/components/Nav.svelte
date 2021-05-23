<script>
  import { Link } from 'svelte-routing'
</script>

<nav class="w-full md:h-12 sm:h-24 m-auto bg-dark-gray text-pale-white fixed">
  <div class="sm:max-w-screen-xl flex flex-row m-auto ">
    <div class="w-1/4 px-5 py-1.5 m-auto font-display text-3xl">
      <Link to="/">
        <div class="cursor-pointer focus:opacity-75">Turfirma</div>
      </Link>
    </div>

    <div class="w-1/2 m-auto flex flex-row justify-center space-x-0.25">
      <Link to="tours">
        <button
          class="md:w-34 sm:min-w-16 h-8 
                    border-pale-white sm:rounded-l-xl border  
                    hover:bg-pale-white hover:text-dark-gray 
                    focus:bg-pale-white focus:text-dark-gray">Туры</button>
      </Link>

      <Link to="hotels">
        <button
          class="md:w-34 sm:min-w-16 h-8 border  border-pale-white hover:bg-pale-white hover:text-dark-gray focus:bg-pale-white focus:text-dark-gray"
          >Отели</button>
      </Link>

      <Link to="tickets">
        <button
          class="md:w-34 sm:min-w-16 h-8 border  border-pale-white hover:bg-pale-white hover:text-dark-gray focus:bg-pale-white focus:text-dark-gray rounded-r-xl"
          >Авиабилеты</button>
      </Link>
    </div>

    <button class="cursor-pointer ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-9 w-9"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-9 w-9"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
  </div>

  <!-- <div id="check">
            <Route path="tickets">
                <Search/>
                <Flight flight={testFlights[0]}/>
            </Route>
            <Route path="/"><Home/></Route>
        </div> -->
</nav>
