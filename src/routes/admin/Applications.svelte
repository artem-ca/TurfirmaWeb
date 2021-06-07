<script>
  import { AdminNav, Application } from "../Admin";

  let showForm = false;
</script>

<div class="pt-12">
  <AdminNav />
  <div class="sm:max-w-screen-xl m-auto px-10 pb-20">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Клиент
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Описание
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Дата
                  </th>

                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>

                    <button
                      class="border border-strange-black hover:bg-gray-200 rounded p-2 mt-4"
                      on:click={() => (view = true)}>Добавить тур</button
                    >

                    {#if view}
                      <TourView
                        tour={emptyTour}
                        closeFunction={() => (view = false)}
                      />
                    {/if}
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <Collection path={"Tours"} log let:data={tours}>
                  {#each tours as tour}
                    <TourCard {tour} />
                    <!-- <div>{tour.name}</div> -->
                  {/each}

                  <div slot="loading">Loading...</div>

                  <div slot="fallback">Unable to display comments...</div>
                </Collection>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
