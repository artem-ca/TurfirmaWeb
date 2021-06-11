<script>
  import { Link } from "svelte-routing";

  import { Collection } from "sveltefire";

  import { HomeTourCard, Tour } from "../Tours";
  import { Tours } from "../../routes";
</script>

<div
  class="md:max-w-screen-xl h-54 m-auto pt-1 md:flex lg:justify-end md:justify-center"
>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 sm:gap-y-5 mx-10">
    <Collection path={"Tours"} log let:data={tours}>
      {#each tours as tour}
        {#if tour.name === "Фьорды Норвегии"}
          <HomeTourCard {tour} />
        {:else if tour.name === "Горы Дагестана"}
          <HomeTourCard {tour} />
        {:else if tour.name === "Водопады Исландии"}
          <HomeTourCard {tour} />
        {/if}
      {/each}
    </Collection>
  </div>
</div>
