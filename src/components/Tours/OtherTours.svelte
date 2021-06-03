<script>
  import { Link } from "svelte-routing";

  import { OtherTourCard } from "../Tours";
</script>

<div class="md:max-w-screen-xl m-auto pt-16 px-5 justify-center ">
  <div
    class="md:flex md:flex-row 
    sm:grid sm:grid-rows-2
    xs:grid xs:grid-rows-2
    justify-items-center justify-center text-strange-black space-x-32"
  >
    <OtherTourCard />
    <div class="my-10 w-72">
      <div class="text-2xl font-montserrat font-semibold ">
        Посмотрите все направления туров
      </div>
      <div class="pt-5 text-lg">
        Хребты гор, берега рек, озер и морей с редкой растительностью.
        Первозданный вид дикой природы и свежий воздух.
      </div>
      <div class="mt-9">
        <Link to="tours">
          <button
            class="w-full min-w-25 md:h-14 sm:h-14 xs:h-14 text-lg
          border-3 border-vinous opacity-90 rounded-4xl 
          focus:outline-none 
          hover:opacity-80 active:opacity-60 "
          >
            Смотреть все туры
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>
