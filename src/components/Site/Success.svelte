<script>
  import { getContext, createEventDispatcher, onDestroy } from "svelte"

  export let closeFunction

  const app = getContext("firebase").getFirebase()
  const firestore = app.firestore()
</script>

<div>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="fixed z-20 inset-0 overflow-y-auto"
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
          <div class="">
            <div
              class="flex flex-col justify-center items-center p-3 text-green-600"
            >
              <div
                class="flex justify-center w-28 h-28 border-4 border-green-600 rounded-full mb-4"
              >
                <svg class="fill-current w-20" viewBox="0 0 20 20">
                  <path
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                  />
                </svg>
              </div>
              <h2 class="font-semibold text-2xl">Успешно</h2>
            </div>
            <main class="p-3 text-center text-strange-black">
              <p>С Вами свяжется наш менеджер!</p>
            </main>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" />
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 ">
          <button
            type="button"
            class="bg-green-600 font-semibold text-white py-3 w-full rounded-b-md hover:bg-green-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
            on:click={closeFunction}
          >
            Класс
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
