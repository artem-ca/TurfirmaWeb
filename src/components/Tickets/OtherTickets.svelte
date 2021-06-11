<script>
  import { Link } from "svelte-routing";

  import { Collection } from "sveltefire";

  import { Flight } from "../Tickets";

  import { testFlights } from "../../utils/data";
</script>

<div class="md:max-w-screen-xl m-auto pt-16 px-5 justify-center ">
  <div
    class="md:flex md:flex-row 
      sm:grid sm:grid-rows-2
      xs:grid xs:grid-rows-2
      justify-center text-strange-black space-x-32"
  >
    <div class="my-10 w-72 self-center">
      <div class="text-2xl font-montserrat font-semibold ">
        Ищите авиабилеты
      </div>
      <div class="pt-5 text-lg">
        Мы предоставляем нашим пользователям возможность искать необходимые
        авиабилеты по глобальной экосистеме поездок.
      </div>
      <div class="mt-9">
        <Link to="tickets">
          <button
            class="w-full min-w-25 md:h-14 sm:h-14 xs:h-14 text-lg
            border-3 border-vinous opacity-90 rounded-4xl 
            focus:outline-none 
            hover:opacity-80 active:opacity-60 "
          >
            Посмотреть билеты
          </button>
        </Link>
      </div>
    </div>

    <div
      class="transition duration-700 delay-5 ease-in-out 
    transform hover:translate-x-1.5 "
    >
      <Link to="tickets">
        <Flight flight={testFlights[0]} />
        <Flight flight={testFlights[0]} />
      </Link>
    </div>
  </div>
</div>
