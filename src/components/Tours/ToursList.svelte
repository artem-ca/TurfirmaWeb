<script>
  // @ts-nocheck

  import { TourCard, Tour, TourSearch } from "../Tours"

  import { Collection } from "sveltefire"
  import { createEventDispatcher } from "svelte"

  import { filteredTours } from "../store.js"

  let view = false
</script>

<div class="md:max-w-screen-xl md:flex m-auto pt-1 justify-center">
  <div
    class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-10 xl:gap-5 mx-5"
  >
    {#if $filteredTours.length === 0}
      <Collection path={"Tours"} log let:data={tours}>
        {#each tours as tour}
          <div>
            <TourCard {tour} />
          </div>
        {/each}

        <div class="mt-80 h-screen" slot="loading">
          <svg
            class="animate-spin"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.4852 3.51467C18.2187 1.24817 15.2053 0 12 0C8.79466 0 5.78128 1.24817 3.51485 3.51467C1.24823 5.78122 0 8.79472 0 12C0 15.2054 1.24823 18.2188 3.51485 20.4853C5.78128 22.7518 8.79472 24 12 24C15.2052 24 18.2187 22.7518 20.4852 20.4853C22.7518 18.2188 24 15.2053 24 12C24 8.79478 22.7518 5.78128 20.4852 3.51467ZM12 4.65455C16.0504 4.65455 19.3454 7.9497 19.3454 12C19.3454 16.0502 16.0504 19.3454 12 19.3454C7.9497 19.3454 4.65455 16.0502 4.65455 12C4.65455 7.9497 7.9497 4.65455 12 4.65455ZM19.7139 19.7139C17.6534 21.7743 14.9139 22.909 12 22.909C9.0861 22.909 6.34663 21.7743 4.28619 19.7139C2.22569 17.6536 1.09091 14.914 1.09091 11.9999H3.56358C3.56358 16.6517 7.34812 20.4363 12 20.4363C16.6519 20.4363 20.4364 16.6518 20.4364 11.9999C20.4364 7.34806 16.6518 3.56352 12 3.56352C11.724 3.56352 11.4511 3.57728 11.1819 3.6033V1.1209C11.4528 1.10095 11.7256 1.09085 12 1.09085C14.9139 1.09085 17.6534 2.22557 19.7139 4.28601C21.7744 6.34651 22.9091 9.08604 22.9091 11.9999C22.909 14.914 21.7744 17.6536 19.7139 19.7139Z"
              fill="#222"
            />
          </svg>
        </div>

        <div slot="fallback">Unable to display comments...</div>
      </Collection>
    {:else}
      {#each $filteredTours as tour}
        <div>
          <TourCard {tour} />
        </div>
      {/each}
    {/if}
  </div>
</div>
