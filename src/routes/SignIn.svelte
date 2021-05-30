<script>
  import { Link } from 'svelte-routing'
  let background = 'img/mayak_zakat.jpg'
</script>

<section
  class="relative py-20 2xl:py-40 overflow-hidden h-screen bg-local bg-cover"
  style="background-image: url('{background}')">
  <div
    class="absolute top-0 left-0 lg:bottom-0 h-full lg:h-auto w-full lg:w-8/12  pt-11 lg:overflow-hidden">
    <img
      class="hidden lg:block mt-64 ml-112"
      src="zospace-assets/lines/circle.svg"
      alt="" />
  </div>

  <div class="relative container px-4 mx-auto">
    <div class="max-w-5xl mx-auto">
      <div class="flex flex-wrap items-center -mx-4">
        <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <div class="max-w-md ">
            <span class="text-lg text-pale-white font-bold"
              >Вход в учетную запись</span>
            <h2
              class="mt-8 mb-12 md:text-5xl xs:text-3xl font-bold font-heading text-white">
              Авторизируясь, Вы существенно расширяете спектр возможностей
              нашего сервиса
            </h2>
            <p class="text-lg text-gray-200">
              <span>Рады видеть Вас снова!</span>
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-4">
          <div
            class="lg:max-w-lg mx-auto px-6 lg:px-20 py-12 lg:py-24 bg-strange-gray rounded-2xl">
            <form action="#">
              <h3 class="mb-10 text-2xl text-white font-bold font-heading">
                Вход в аккаунт
              </h3>
              <Link to="signup"
                ><span class="text-white"> или зарегистрируйтесь </span>
              </Link>
              <div class="flex items-center pl-6 mb-3 bg-white rounded-2xl">
                <span class="inline-block pr-3 border-r border-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  class="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-400 placeholder-opacity-75 rounded-r-full focus:outline-none"
                  type="email"
                  placeholder="best_user@example.tru" />
              </div>
              <div class="flex items-center pl-6 mb-3 bg-white rounded-2xl">
                <span class="inline-block pr-3 border-r border-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  class="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-400 placeholder-opacity-75 rounded-r-full focus:outline-none"
                  type="password"
                  placeholder="Пароль" />
              </div>

              <button
                class="py-4 mt-10 w-full bg-red-600 hover:bg-red-500 active:bg-red-400 text-strange-black font-bold rounded-2xl transition duration-200"
                >Начнем</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
