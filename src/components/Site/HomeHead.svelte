<script>
  import { Link } from "svelte-routing";

  import { Collection } from "sveltefire";

  import { ApplicationForm } from "../Site";
  import { Tour, ToursLine } from "../Tours";

  export let tour;

  let view = false;

  let showForm = false;

  let background = "img/mayak_vecher.webp";
</script>

<div
  class="bg-local bg-cover h-screen pt-11"
  style="background-image: url('{background}')"
>
  <div class="md:max-w-screen-xl md:flex flex-wrap m-auto pt-1 px-5">
    <div class="text-left text-pale-white">
      <div
        class="max-w-4xl md:mt-30 xs:mt-16 flex flex-wrap md:text-home-heading sm:text-5xl xs:text-3xl md:text-left xs:text-center text-pale-white font-bold leading-normal font-head"
      >
        Откройте для себя Невероятную Ирландию
      </div>
      <div
        class="mt-12 md:text-left xs:text-center md:text-2xl xs:text-lg text-pale-white font-head"
      >
        Фирменные туры компании
      </div>
      <div
        class="mt-10 
        md:justify-start sm:justify-center xs:justify-center
        md:flex md:flex-row sm:flex sm:flex-row xs:grid xs:grid-rows-3 xs:justify-items-center
        md:space-x-5 sm:space-x-5 sm:space-y-0 xs:space-x-0 xs:space-y-1
        md:text-xl sm:text-lg xs:text-base"
      >
        <button
          class="w-60 min-w-25 md:h-16 sm:h-14 xs:h-14 bg-vinous  text-pale-white opacity-90 rounded-3xl 
      focus:outline-none 
      hover:opacity-80 active:bg-red-800"
          on:click={() => (view = true)}
        >
          Подробнее
        </button>
        <button
          class="w-60 min-w-25 md:h-16 sm:h-14 xs:h-14 border-3 border-vinous text-pale-white opacity-90 rounded-3xl 
          focus:outline-none 
          hover:opacity-80 active:opacity-60"
          on:click={() => (showForm = true)}
        >
          Оставить заявку
        </button>

        <div class="text-base">
          {#if view}
            <Collection path={"Tours"} log let:data={tours}>
              {#each tours as tour}
                {#if tour.name === "Невероятная Ирландия"}
                  <Tour {tour} closeFunction={() => (view = false)} />
                {/if}
              {/each}
            </Collection>
          {/if}
        </div>

        {#if showForm}
          <ApplicationForm />
        {/if}
      </div>
    </div>
  </div>
  <div class="mt-20 h-56 ">
    <ToursLine />
  </div>
</div>
