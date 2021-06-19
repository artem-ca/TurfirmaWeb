<script>
  import { Collection } from "sveltefire"

  import { AdminNav, BookingView, BookCard } from "../../components/Admin"

  let view = false

  let emptyBook = {
    description: "",
    email: "",
    name: "",
    phone: "",
  }
</script>

<div class="pt-12">
  <AdminNav />
  <div class="sm:max-w-screen-xl m-auto px-10 pb-20">
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
                    Имя заказчика
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Тур
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Даты тура
                  </th>

                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Дата брони
                  </th>

                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>

                    <button
                      class="border border-strange-black hover:bg-gray-200 rounded p-2 mt-4"
                      on:click={() => (view = true)}>Добавить бронь</button
                    >

                    {#if view}
                      <BookingView
                        book={emptyBook}
                        closeFunction={() => (view = false)}
                      />
                    {/if}
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <Collection path={"Booking"} log let:data={bookings}>
                  {#each bookings as book}
                    <BookCard {book} />
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
