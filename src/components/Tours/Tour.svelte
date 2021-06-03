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

<!-- This example requires Tailwind CSS v2.0+ -->
<div
  class="fixed z-10 inset-0 overflow-y-auto"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
>
  <div
    class="flex items-end justify-center min-h-screen mt-10 pt-4 px-4 pb-20 text-center sm:block sm:p-0"
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
      class="inline-block align-bottom bg-pale-white rounded-lg text-left 
      overflow-hidden shadow-2xl transform transition-all 
      sm:my-8 sm:align-middle lg:max-w-4xl md:max-w-2xl sm:max-w-xl sm:w-full"
    >
      <div class="bg-pale-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start" />
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <div class="flex flex-row justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="space-y-0.5">
            <h3
              class="text-xl leading-6 font-bold text-gray-900 text-center"
              id="modal-title"
            >
              Невероятная Ирландия
            </h3>

            <h2
              class="leading-6 font-medium text-gray-900 text-center"
              id="modal-title"
            >
              Ирландия, Дублин
            </h2>

            <div
              class="leading-6 font-bold text-gray-900 text-center "
              id="modal-title"
            >
              5.0
            </div>
          </div>
          <div
            class="max-w-xl w-full h-90 mt-5 bg-strange-gray text-pale-white rounded-lg m-auto "
          >
            <span class="">sss</span>
          </div>

          <div class="mt-10 text-strange-black font-montserrat space-y-3">
            <h1 class=" font-semibold text-lg">Описание</h1>

            <div>
              Отличный тур с приколамиОтличный тур с приколамиОтличный тур с
              приколами Отличный тур с приколамиОтличный тур с приколамиОтличный
              тур с приколами Отличный тур с приколамиОтличный тур с
              приколамиОтличный тур с приколами Отличный тур с приколамиОтличный
              тур с приколамиОтличный тур с приколами
            </div>
          </div>

          <div class="mt-5 text-strange-black font-montserrat space-y-3">
            <h1 class=" font-semibold text-lg">Выбор отеля</h1>

            <label
              class="w-full flex items-center text-center 
              hover:bg-green-100 focus:bg-green-100 
              focus:outline-none focus:ring focus:border-green-200
              cursor-pointer rounded-lg"
            >
              <div class="w-34 max-w-xs h-34 bg-strange-gray rounded-lg" />
              <input class="mx-5 " type="radio" />
              <div class="mx-5">100 звезд</div>
              <div />
            </label>
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
