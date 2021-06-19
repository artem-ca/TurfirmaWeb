<script>
  import { Tour } from "../Tours"

  export let tour

  let view = false

  let img = "img/kolugljufur_iceland.jpg"
</script>

<div
  class="flex flex-row m-auto cursor-pointer bg-transparent relative"
  on:click={() => (view = true)}
>
  <div
    class="w-75 h-47.5 bg-strange-gray rounded-4xl
          transition duration-300 delay-5 ease-in-out 
          transform hover:-translate-y-2 shadow-2xl"
  >
    <div
      class="w-70 h-44 mx-auto mt-2 rounded-4xl bg-local bg-cover shadow-inner-2 "
      style="background-image: url('{tour.imageURL}')"
    >
      <div
        class="w-34 ml-5 mt-25 text-pale-white absolute flex flex-row font-montserrat text-sm"
      >
        <div class="pt-2.5">{tour.name}</div>
        <div class="ml-32 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
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
</div>
{#if view}
  <Tour {tour} closeFunction={() => (view = false)} />
{/if}
