<script>
  let files;
  let visa = true;

  $: if (files) {
    // Переменная `files` будет типа `FileList`, а не массивом:
    // https://developer.mozilla.org/ru/docs/Web/API/FileList
    console.log(files);

    for (const file of files) {
      console.log(`${file.name}: ${file.size} байт(а)`);
    }
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
      <!--
          Background overlay, show/hide based on modal state.
    
          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      />

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true">&#8203;</span
      >

      <!--
          Modal panel, show/hide based on modal state.
    
          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
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
              Изменить отель
            </h3>

            <div class="mt-2 flex flex-col">
              <label
                for="Images"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Фото
              </label>

              <div class="flex flex-col">
                <label for="HotelAvatar">Загрузить главное фото:</label>
                <input
                  accept="image/png, image/jpeg"
                  bind:files
                  id="HotelAvatar"
                  name="hotelAvatar"
                  type="file"
                />

                <label for="HotelPhotos">Загрузить все фото:</label>
                <input
                  accept="image/png, image/jpeg"
                  bind:files
                  id="HotelPhotos"
                  name="hotelPhotos"
                  multiple
                  type="file"
                />
              </div>
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="HotelName"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Название
              </label>
              <input
                type="text"
                id="HotelName"
                name="hotelName"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="Название отеля"
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="FirstName"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Страна
              </label>
              <select
                type="text"
                id="Country"
                name="country"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="Страна"
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="Area"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Регион
              </label>
              <select
                type="text"
                id="Area"
                name="area"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder=""
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="City"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Город
              </label>
              <select
                type="text"
                id="City"
                name="city"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder=""
              />
            </div>

            <div class="mt-2 flex flex-col">
              <label
                for="PricePerNight"
                class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >Стоимость за ночь
              </label>

              <input
                type="number"
                id="PricePerNight"
                name="pricePerNight"
                required
                class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="Стоимость"
              />
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 active:bg-green-600 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Сохрнаить
          </button>
          <button
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
