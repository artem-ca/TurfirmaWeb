<script>
  export let tour;
  export let closeFunction;

  let files;

  let {
    id,
    name,
    area,
    country,
    city,
    hotel,
    hotelLink,
    price,
    rating,
    visa,
    description,
  } = tour;

  $: if (files) {
    // Переменная `files` будет типа `FileList`, а не массивом:
    // https://developer.mozilla.org/ru/docs/Web/API/FileList
    console.log(files);

    for (const file of files) {
      console.log(`${file.name}: ${file.size} байт(а)`);
    }
  }

  // document.getElementById('content').innerHTML =
  //     marked('# Marked in the browser\n\nRendered by **marked**.');
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
          <div
            class="flex flex-row justify-end cursor-pointer hover:opacity-80"
            on:click={closeFunction}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.012 2.00391C6.49127 2.00061 2.01319 6.47333 2.00989 11.994C2.00659 17.5147 6.47931 21.9928 12 21.9961C14.6523 22.0004 17.197 20.9479 19.0713 19.0713C20.9463 17.1979 22.0005 14.6565 22.0021 12.006C22.0054 6.48529 17.5327 2.0072 12.012 2.00391ZM12.0123 20.9961C7.04383 20.9995 3.01343 16.9746 3.01001 12.0061C3.00665 7.03772 7.03162 3.00727 12 3.00391C14.3871 2.99964 16.6774 3.94678 18.3643 5.63574C20.0517 7.3216 21.0006 9.60858 21.0022 11.9939C21.0056 16.9623 16.9807 20.9927 12.0123 20.9961ZM12.707 12L15.8886 8.81836C16.0792 8.62396 16.0792 8.31287 15.8886 8.11847C15.6954 7.92127 15.3788 7.91809 15.1816 8.11133L12 11.293L8.81836 8.11139C8.62396 7.9209 8.31287 7.9209 8.11847 8.11139C7.92127 8.30463 7.91809 8.62116 8.11133 8.81836L11.293 12L8.11133 15.1816C8.01758 15.2754 7.96497 15.4025 7.96491 15.5351C7.96491 15.8112 8.18872 16.0351 8.46485 16.0352C8.59748 16.0353 8.72473 15.9826 8.81836 15.8887L12 12.707L15.1816 15.8887C15.2753 15.9826 15.4025 16.0353 15.5352 16.0352V16.0352C15.6677 16.0352 15.7948 15.9825 15.8886 15.8888C16.0839 15.6935 16.0839 15.377 15.8886 15.1816L12.707 12Z"
                fill="#222"
              />
            </svg>
          </div>
          <div class="space-y-0.5">
            <h3
              class="text-xl leading-6 font-bold text-gray-900 text-center"
              id="modal-title"
            >
              {name}
            </h3>

            <h2
              class="leading-6 font-medium text-gray-900 text-center"
              id="modal-title"
            >
              {country}, {city}
            </h2>

            <div
              class="leading-6 font-bold text-gray-900 text-center "
              id="modal-title"
            >
              {rating}
            </div>
          </div>
          <div
            class="max-w-xl w-full h-90 mt-5 bg-strange-gray text-pale-white rounded-lg m-auto "
          >
            <span class="">photos</span>
          </div>

          <div class="mt-10 text-strange-black font-montserrat space-y-3">
            <h1 class=" font-semibold text-lg">Описание</h1>

            <div>
              {description}
            </div>
          </div>

          <div class="mt-5 text-strange-black font-montserrat space-y-3">
            <h1 class=" font-semibold text-lg">Отель</h1>

            <div>
              Ваше проживание будет проходить в отеле {hotel}. <br />
              Это очень уютный и комфортный отель, который отлично подходит данному
              туру. <br />
              Подробнее об этом отеле Вы можете узнать на сайте -
              <a class="text-blue-700 hover:text-blue-800" href={hotelLink}
                >{hotelLink}</a
              >
            </div>
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
          on:click={closeFunction}
        >
          Отмена
        </button>
      </div>
    </div>
  </div>
</div>
