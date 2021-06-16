<script>
  import { getContext } from "svelte"
  export let client
  export let closeFunction

  const DEBUG = true

  const app = getContext("firebase").getFirebase()
  const firestore = app.firestore()

  let {
    uid,
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
    regDate,
  } = client
  DEBUG && console.log(client)

  let files

  function addClient() {
    let clientsRef = firestore.collection(`/Users`)
    let data = {
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
      regDate,
    }

    clientsRef
      .add(data)
      .then((docRef) => console.log("=== ClientView: client added ", docRef.id))
      .catch((error) =>
        console.error("=== ClientView: client NOT added ", error)
      )
  }
  function updateClient() {
    let clientRef = firestore.doc(`/Users/${id}`)
    let data = {
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
      regDate,
    }

    clientRef
      .update(data)
      .then(() => console.log("=== ClientView: client added ", id))
      .catch((error) =>
        console.error("=== ClientView: client NOT added ", error)
      )
  }

  $: if (files) {
    // Переменная `files` будет типа `FileList`, а не массивом:
    // https://developer.mozilla.org/ru/docs/Web/API/FileList
    console.log(files)

    for (const file of files) {
      console.log(`${file.name}: ${file.size} байт(а)`)
    }
  }
</script>

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
    />

    <!-- This element is to trick the browser into centering the modal contents. -->
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
            Изменить информацию о клиенте
          </h3>

          <div class="mt-2 flex flex-col">
            <label
              for="Images"
              class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >Фото
            </label>

            <div class="flex flex-col">
              <label for="HotelAvatar">Загрузить аватар:</label>
              <input
                accept="image/png, image/jpeg"
                bind:files
                id="HotelAvatar"
                name="hotelAvatar"
                type="file"
              />
            </div>
          </div>

          <div class="mt-2 flex flex-col">
            <label
              for="LastName"
              class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >Фамилия
            </label>
            <input
              bind:value={lastName}
              type="text"
              id="LastName"
              name="lastName"
              required
              class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Фамилия"
            />
          </div>

          <div class="mt-2 flex flex-col">
            <label
              for="Name"
              class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >Имя
            </label>
            <input
              bind:value={name}
              type="text"
              id="Name"
              name="name"
              required
              class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Имя"
            />
          </div>

          <div class="mt-2 flex flex-col">
            <label
              for="MiddleName"
              class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >Отчество
            </label>
            <input
              bind:value={middleName}
              type="text"
              id="MiddleName"
              name="MiddleName"
              required
              class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Отчество"
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
              type="text"
              id="Email"
              name="email"
              required
              class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
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
              class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Телефон"
            />
          </div>

          <div class="mt-2 flex flex-col">
            <label
              for="Address"
              class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >Адрес
            </label>
            <input
              bind:value={address}
              type="text"
              id="Address"
              name="address"
              required
              class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Отчество"
            />
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        {#if id === ""}
          <button
            on:click={addClient}
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 active:bg-green-600 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Добавить
          </button>
        {:else}
          <button
            on:click={updateClient}
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 active:bg-green-600 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Сохранить
          </button>
        {/if}

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
