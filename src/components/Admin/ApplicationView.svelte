<script>
  import { getContext } from "svelte"

  export let application
  export let closeFunction

  const DEBUG = true

  const app = getContext("firebase").getFirebase()
  const firestore = app.firestore()

  let { id, descritpion, email, name, phone } = application
  DEBUG && console.log(application)

  function addApplication() {
    let applicationRef = firestore.collection(`/Applications`)
    let data = {
      descritpion,
      email,
      name,
      phone,
    }

    applicationRef
      .add(data)
      .then((docRef) => console.log("=== ClientView: client added ", docRef.id))
      .catch((error) =>
        console.error("=== ClientView: client NOT added ", error)
      )
  }

  function updateApplication() {
    let applicationRef = firestore.doc(`/Applications/${id}`)
    let data = {
      descritpion,
      email,
      name,
      phone,
    }

    applicationRef
      .update(data)
      .then(() => console.log("=== ClientView: client added ", id))
      .catch((error) =>
        console.error("=== ClientView: client NOT added ", error)
      )
  }

  function deleteApplication() {
    let applicationRef = firestore.doc(`/Applications/${application.id}`)

    applicationRef
      .delete()
      .then(() => console.log("=== TourView: tour deleted "))
      .catch((error) => console.error("=== TourView: tour NOT deleted ", error))
  }
</script>

<div>
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
              Заявка на подбор тура
            </h3>

            <div class="mt-2 flex flex-col">
              <label
                for="Name"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Имя клиента
              </label>
              <input
                bind:value={name}
                type="text"
                id="Name"
                name="name"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none 
                focus:border-indigo-700 placeholder-gray-500 text-strange-black dark:text-gray-400"
                placeholder="Имя"
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Email"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Почта
              </label>
              <input
                bind:value={email}
                type="email"
                id="Email"
                name="email"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none 
                focus:border-indigo-700 placeholder-gray-500 text-strange-black dark:text-gray-400"
                placeholder="Электронная почта"
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Phone"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Телефон
              </label>
              <input
                bind:value={phone}
                type="text"
                id="Phone"
                name="phone"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none 
                focus:border-indigo-700 placeholder-gray-500 text-strange-black dark:text-gray-400"
                placeholder="Телефон"
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Phone"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Описание
              </label>
              <textarea
                bind:value={descritpion}
                class=" bg-pale-white text-strange-black border resize-y max-h-52 rounded-md"
              />
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <!-- {#if id === ""} -->
          <button
            on:click={addApplication}
            on:click={closeFunction}
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 active:bg-green-600 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Добавить
          </button>
          <!-- {:else}
            <button
              on:click={updateApplication}
              on:click={closeFunction}
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 active:bg-green-600 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Сохранить
            </button>
          {/if} -->

          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-strange-gray text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-strange-gray active:bg-gray-700 sm:ml-3 sm:w-auto sm:text-sm"
            on:click={closeFunction}
          >
            Закрыть
          </button>

          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 
            text-gray-700 text-base font-medium 
            bg-red-700 hover:bg-red-600 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-strange-gray sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            on:click={deleteApplication}
            on:click={closeFunction}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                fill="#fafafa"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
