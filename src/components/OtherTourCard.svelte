<script>
  import { ToursLine } from '../components'

  let background = 'img/dagestan_2_sedlo_gora.jpg'
</script>

<div class="md:max-w-screen-xl  text-pale-white">
  <div
    class="w-155 h-90 bg-local bg-cover rounded-3xl cursor-pointer 
    shadow-inner-3 filter hover:brightness-110
    transition duration-700 delay-5 ease-in-out 
    transform hover:translate-x-1.5 "
    style="background-image: url('{background}')"
  >
    <div class="pt-10 text-center font-montserrat text-2xl">Дагестан</div>
    <div class="w-full px-14 pt-52 flex flex-row font-montserrat text-xl ">
      <span>Седло-гора</span>
      <div class="-my-0.5 ml-84 justify-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10  "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  </div>
</div>
