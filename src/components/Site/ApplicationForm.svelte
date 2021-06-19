<script>
  import { getContext, createEventDispatcher, onDestroy } from "svelte"
  import Success from "./Success.svelte"

  export let application
  export let closeFunction

  const DEBUG = true

  const app = getContext("firebase").getFirebase()
  const firestore = app.firestore()

  let showModal = false

  let { id, description, email, name, phone } = application
  DEBUG && console.log(application)

  function addApplication() {
    let applicationsRef = firestore.collection(`/Applications`)
    let data = {
      description,
      email,
      name,
      phone,
      date,
    }

    applicationsRef
      .add(data)
      .then((docRef) => console.log("=== TourView: tour added ", docRef.id))
      .catch((error) => console.error("=== TourView: tour NOT added ", error))
  }
</script>

<div>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        on:click={closeFunction}
      />

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true">&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start" />
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              class="text-xl leading-6 font-bold text-gray-900 text-center pb-2"
              id="modal-title"
            >
              Оставьте заявку на подбор тура
            </h3>

            <div class="mt-2 flex flex-col">
              <label
                for="HotelName"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Ваше имя
              </label>
              <input
                type="text"
                id="HotelName"
                name="hotelName"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="Имя"
                bind:value={name}
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Email"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Почта
              </label>
              <input
                type="text"
                id="Email"
                name="email"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="Электронная почта"
                bind:value={email}
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Phone"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Телефон
              </label>
              <input
                type="number"
                maxlength="11"
                id="Phone"
                name="phone"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="Телефон"
                bind:value={phone}
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Phone"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Описание
              </label>
              <textarea
                class=" bg-pale-white text-strange-gray border resize-y max-h-52 rounded-md"
                bind:value={description}
              />
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 active:bg-green-600 sm:ml-3 sm:w-auto sm:text-sm"
            on:click={addApplication}
            on:click={() => (showModal = true)}
          >
            Отправить
          </button>
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            on:click={closeFunction}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
{#if showModal}
  <Success closeFunction={() => (showModal = false)} />
{/if}
