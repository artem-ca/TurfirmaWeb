<script>
  import { getContext } from "svelte"
  export let tour
  export let book
  export let closeFunction

  const DEBUG = true

  const app = getContext("firebase").getFirebase()
  const firestore = app.firestore()

  let view = false
  let yes = false

  let {
    id,
    email,
    name,
    lastName,
    middleName,
    phone,
    address,
    passport,
    interPassport,
    birthday,
  } = book
  DEBUG && console.log(book)

  function addBook() {
    let bookingRef = firestore.collection(`/Booking`)
    let data = {
      email,
      name,
      lastName,
      middleName,
      phone,
      address,
      passport,
      interPassport,
      birthday,
      tour,
    }

    bookingRef
      .add(data)
      .then((docRef) => console.log("=== ClientView: client added ", docRef.id))
      .catch((error) =>
        console.error("=== ClientView: client NOT added ", error)
      )
  }
</script>

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
      class="inline-block align-bottom bg-pale-white rounded-lg text-left 
      overflow-hidden shadow-2xl transform transition-all 
      sm:my-8 sm:align-middle lg:max-w-4xl md:max-w-2xl sm:max-w-xl sm:w-full"
    >
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start" />
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3
            class="text-xl leading-6 font-bold text-gray-900 text-center pb-2"
            id="modal-title"
          >
            Бронь тура: {tour.name}
          </h3>

          <div class="grid grid-cols-2 space-x-2">
            <div class="mt-2 flex flex-col pl-2">
              <label
                for="LastName"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Фамилия
              </label>
              <input
                type="text"
                id="LastName"
                name="lastName"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="Сидоров"
                bind:value={lastName}
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
                for="Name"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Имя
              </label>
              <input
                type="text"
                id="Name"
                name="name"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="Весемир"
                bind:value={name}
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Phone"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Телефон
              </label>
              <input
                type="text"
                id="Phone"
                name="phone"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="89998887766"
                bind:value={phone}
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="MiddleName"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Отчество
              </label>
              <input
                type="text"
                id="MiddleName"
                name="MiddleName"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="Андреевич"
                bind:value={middleName}
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Address"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Адрес
              </label>
              <input
                type="text"
                id="Address"
                name="address"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="г. Екатеринбург, ул. Первомаяская, д.73"
                bind:value={address}
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Address"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Паспорт
              </label>
              <input
                type="number"
                maxlength="10"
                id="Passport"
                name="passport"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="4507691152"
                bind:value={passport}
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Address"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Загранпаспорт
              </label>
              <input
                type="number"
                maxlength="9"
                id="InterPassport"
                name="interPassport"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="520022196"
                bind:value={interPassport}
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label class="text-xl self-center text-center mt-5 ">
                <input type="checkbox" bind:checked={yes} />
                Нажимая, вы соглашаетесь на обработку персональных данных
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-center"
      >
        <button
          on:click={addBook}
          on:click={closeFunction}
          disabled={!yes}
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 active:bg-green-600 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Забронировать
        </button>

        <button
          on:click={closeFunction}
          type="button"
          class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Отмена
        </button>
      </div>
    </div>
  </div>
</div>
