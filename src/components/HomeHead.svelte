<script>
  import { ToursLine } from '../components'

  let background = 'img/mayak_vecher.jpg'
</script>

<div
  class="bg-local bg-cover h-screen pt-11"
  style="background-image: url('{background}')"
>
  <div class="md:max-w-screen-xl md:flex flex-wrap m-auto pt-1 px-5">
    <div class="text-left text-pale-white">
      <div
        class="max-w-5xl md:mt-30 xs:mt-16 flex flex-wrap md:text-home-heading sm:text-5xl xs:text-3xl md:text-left xs:text-center text-pale-white font-bold leading-normal font-head"
      >
        Откройте для себя Невероятную Ирландию
      </div>
      <div
        class="mt-12 md:text-left xs:text-center md:text-2xl xs:text-lg text-pale-white font-head"
      >
        Фирменные туры компании
      </div>
      <div
        class="mt-10 
        md:justify-start sm:justify-center xs:justify-center
        md:flex md:flex-row sm:flex sm:flex-row xs:grid xs:grid-rows-3 xs:justify-items-center
        md:space-x-5 sm:space-x-5 sm:space-y-0 xs:space-x-0 xs:space-y-1
        md:text-xl sm:text-lg xs:text-base"
      >
        <button
          class="w-60 min-w-25 md:h-16 sm:h-14 xs:h-14 bg-vinous  text-pale-white opacity-90 rounded-4xl 
          focus:outline-none 
          hover:opacity-80 active:bg-red-800 "
        >
          Подробнее
        </button>
        <button
          class="w-60 min-w-25 md:h-16 sm:h-14 xs:h-14 border-3 border-vinous text-pale-white opacity-90 rounded-4xl 
          focus:outline-none 
          hover:opacity-80 active:opacity-60 "
        >
          Оставить заявку
        </button>
        <div
          class="flex flex-row cursor-pointer opacity-80 hover:opacity-70 active:opacity-60 m-auto text-center"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.1 34.9L36.1094 28.2375C35.6383 27.9232 35.0907 27.7428 34.5251 27.7156C33.9594 27.6884 33.397 27.8154 32.898 28.0831C32.3989 28.3507 31.982 28.749 31.6917 29.2352C31.4015 29.7215 31.2488 30.2774 31.25 30.8437V44.1656C31.2499 44.7314 31.4034 45.2865 31.6941 45.7719C31.9849 46.2572 32.4019 46.6546 32.9007 46.9215C33.3996 47.1884 33.9615 47.3148 34.5266 47.2874C35.0917 47.2599 35.6388 47.0796 36.1094 46.7656L46.1 40.1031C46.528 39.8177 46.8789 39.4311 47.1216 38.9775C47.3643 38.524 47.4913 38.0175 47.4913 37.5031C47.4913 36.9887 47.3643 36.4822 47.1216 36.0287C46.8789 35.5751 46.528 35.1885 46.1 34.9031V34.9Z"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M65.625 37.5C65.625 41.1934 64.8975 44.8507 63.4841 48.263C62.0707 51.6753 59.999 54.7757 57.3874 57.3874C54.7757 59.999 51.6753 62.0707 48.263 63.4841C44.8507 64.8975 41.1934 65.625 37.5 65.625C33.8066 65.625 30.1493 64.8975 26.737 63.4841C23.3247 62.0707 20.2243 59.999 17.6126 57.3874C15.001 54.7757 12.9293 51.6753 11.5159 48.263C10.1025 44.8507 9.375 41.1934 9.375 37.5C9.375 30.0408 12.3382 22.8871 17.6126 17.6126C22.8871 12.3382 30.0408 9.375 37.5 9.375C44.9592 9.375 52.1129 12.3382 57.3874 17.6126C62.6618 22.8871 65.625 30.0408 65.625 37.5Z"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="w-30 pl-2 pt-0.5 font-thin text-lg">
            Посмотрите видео-отчет
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-20 h-56 ">
    <ToursLine />
  </div>
</div>
