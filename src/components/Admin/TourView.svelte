<script>
  import { getContext } from "svelte"

  export let tour
  export let closeFunction

  const DEBUG = true

  const app = getContext("firebase").getFirebase()
  const firestore = app.firestore()

  let {
    id,
    area,
    city,
    country,
    description,
    hotel,
    hotelLink,
    iata,
    imageURL,
    name,
    price,
    rating,
    visa,
  } = tour
  DEBUG && console.log(tour)

  function addTour() {
    let toursRef = firestore.collection(`/Tours`)
    let data = {
      area,
      city,
      country,
      description,
      hotel,
      hotelLink,
      iata,
      imageURL,
      name,
      price,
      rating,
      visa,
    }

    toursRef
      .add(data)
      .then((docRef) => console.log("=== TourView: tour added ", docRef.id))
      .catch((error) => console.error("=== TourView: tour NOT added ", error))
  }

  function updateTour() {
    let tourRef = firestore.doc(`/Tours/${id}`)
    let data = {
      area,
      city,
      country,
      description,
      hotel,
      hotelLink,
      iata,
      imageURL,
      name,
      price,
      rating,
      visa,
    }

    tourRef
      .update(data)
      .then(() => console.log("=== TourView: tour updated ", id))
      .catch((error) => console.error("=== TourView: tour NOT updated ", error))
  }
</script>

<div>
  <div
    class="fixed z-10 inset-0 overflow-y-auto pt-10"
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
              Изменить тур
            </h3>

            <div class="mt-2 flex flex-col">
              <label
                for="TourName"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Название
              </label>
              <input
                bind:value={name}
                type="text"
                id="TourName"
                name="tourName"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-strange-black dark:text-gray-400"
                placeholder="Название тура"
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="FirstName"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Страна
              </label>
              <input
                bind:value={country}
                type="text"
                id="Country"
                name="country"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-strange-black dark:text-gray-400"
                placeholder="Россия"
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Area"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Регион
              </label>
              <input
                bind:value={area}
                type="text"
                id="Area"
                name="area"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-strange-black dark:text-gray-400"
                placeholder="Урал"
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="City"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Город
              </label>
              <input
                bind:value={city}
                type="text"
                id="City"
                name="city"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-strange-black dark:text-gray-400"
                placeholder="Екатеринбург"
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Hotel"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Отель
              </label>
              <input
                bind:value={hotel}
                type="text"
                id="Hotel"
                name="hotel"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-strange-black dark:text-gray-400"
                placeholder="Плаза"
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="HotelLink"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Ссылка на отель
              </label>
              <input
                bind:value={hotelLink}
                type="text"
                id="HotelLink"
                name="hotelLink"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-strange-black dark:text-gray-400"
                placeholder=""
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="ImageURL"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Ссылка на фото
              </label>
              <input
                bind:value={imageURL}
                type="text"
                id="ImageURL,"
                name="imageURL"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-strange-black dark:text-gray-400"
                placeholder=""
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Iata"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >IATA-код
              </label>
              <input
                bind:value={iata}
                type="iata"
                maxlength="3"
                style="text-transform: uppercase;"
                id="Iata"
                name="iata"
                required
                pattern="[A-Z]"
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-strange-black dark:text-gray-400"
                placeholder="SVX"
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Description"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Рейтинг
              </label>
              <input
                bind:value={rating}
                type="number"
                id="Rating"
                name="rating"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-strange-black dark:text-gray-400"
                placeholder=""
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Description"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Описание
              </label>
              <textarea
                bind:value={description}
                class=" bg-pale-white text-strange-gray border resize-y max-h-52 rounded-md"
                type="text"
                id="Description"
                name="description"
                required
                placeholder=""
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Price"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Стоимость за ночь
              </label>
              <input
                bind:value={price}
                type="price"
                id="Price"
                name="price"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-strange-black dark:text-gray-400"
                placeholder="1000"
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Hotel"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Виза</label
              >

              <div class="flex flex-row space-x-5 justify-center text-lg">
                <label>
                  <input type="radio" bind:group={visa} value={true} />
                  с визой
                </label>
                <label>
                  <input type="radio" bind:group={visa} value={false} />
                  без визы
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          {#if id === ""}
            <button
              on:click={addTour}
              on:click={closeFunction}
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 active:bg-green-600 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Добавить
            </button>
          {:else}
            <button
              on:click={updateTour}
              on:click={closeFunction}
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
</div>
