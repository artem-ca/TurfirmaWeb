<script>
  import { Collection } from "sveltefire"

  import {
    AdminNav,
    ApplicationView,
    ApplicationCard,
  } from "../../components/Admin"

  let view = false

  let emptyApplication = {
    description: "",
    email: "",
    name: "",
    phone: "",
  }
</script>

<div class="pt-12 min-h-screen">
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
                    Почта
                  </th>

                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Телефон
                  </th>

                  <th scope="col" class="relative px-6 py-3 justify-end ">
                    <span class="sr-only">Edit</span>

                    <button
                      class="border border-strange-black hover:bg-gray-200 rounded p-2 mt-4 "
                      on:click={() => (view = true)}>Добавить заявку</button
                    >

                    {#if view}
                      <ApplicationView
                        application={emptyApplication}
                        closeFunction={() => (view = false)}
                      />
                    {/if}
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <Collection path={"Applications"} log let:data={applications}>
                  {#each applications as application}
                    <ApplicationCard {application} />
                  {/each}

                  <div slot="loading">Загрузка данных...</div>

                  <div slot="fallback">Ошибка: Доступ к данным не получен</div>
                </Collection>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
