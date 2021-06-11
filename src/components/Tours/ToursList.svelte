<script>
  import { TourCard, Tour, TourSearch } from "../Tours";

  import { dest } from "../store.js";

  import { Collection } from "sveltefire";

  import { createEventDispatcher } from "svelte";

  let view = false;
</script>

<div class="md:max-w-screen-xl md:flex m-auto pt-1 justify-center">
  <div
    class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-10 xl:gap-5 mx-5  elast"
  >
    <Collection path={"Tours"} log let:data={tours}>
      {#each tours as tour}
        <div>
          <TourCard {tour} />
        </div>
      {/each}

      <!-- {#if view}
        <Tour tour={emptyTour} closeFunction={() => (view = false)} />
      {/if} -->

      <!-- {#if dest === ""}
        {#each tours as tour}
          <TourCard {tour} />
        {/each}
      {:else}
        {#each tours.name === dest as tour}
          <TourCard {tour} />
        {/each}
      {/if}  -->

      <div slot="loading">Loading...</div>

      <div slot="fallback">Unable to display comments...</div>
    </Collection>
  </div>
</div>
