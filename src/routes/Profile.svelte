<script>
</script>

<form id="login">
  <div class="md:max-w-screen-xl flex m-auto px-5 bg-pale-white pt-11 ">
    <div class="container mx-auto bg-white rounded ">
      <div>
        <div
          class="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
          <div
            class="w-full border-b border-gray-300 dark:border-gray-700 py-5">
            <div class="flex mx-auto xl:w-full xl:mx-0 items-center">
              <p
                class="text-lg text-gray-800 dark:text-gray-100 font-bold mx-5">
                Профиль
              </p>
              <div class="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16">
                  <path
                    class="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
          <div class="m-auto pt-4">
            <div class="container m-auto">
              <form class="my-6 w-11/12 mx-auto xl:w-full xl:mx-0">
                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 ">
                  <label
                    for="FirstName"
                    class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >First Name</label>
                  <input
                    type="text"
                    id="FirstName"
                    name="firstName"
                    required
                    class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="" />
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    for="LastName"
                    class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >Last Name</label>
                  <input
                    type="text"
                    id="LastName"
                    name="lastName"
                    required
                    class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="" />
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    for="Email"
                    class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >Email</label>
                  <div class="border border-green-400 shadow-sm rounded flex">
                    <div
                      class="px-4 py-3 dark:text-gray-100 flex items-center border-r border-green-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-mail"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="Email"
                      name="email"
                      required
                      class="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400"
                      placeholder="example@gmail.com" />
                  </div>
                  <div
                    class="flex justify-between items-center pt-1 text-green-400">
                    <p class="text-xs">Email submission success!</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16">
                      <path
                        class="heroicon-ui"
                        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
        0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                        stroke="currentColor"
                        stroke-width="0.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    for="StreetAddress"
                    class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >Street Address</label>
                  <input
                    type="text"
                    id="StreetAddress"
                    name="streetAddress"
                    required
                    class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="" />
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    for="City"
                    class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >City</label>
                  <div
                    class="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex">
                    <input
                      type="text"
                      id="City"
                      name="city"
                      required
                      class="pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 text-gray-500 dark:text-gray-400"
                      placeholder="Los Angeles" />
                    <div
                      class="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-chevron-up"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 15 12 9 18 15" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-chevron-down"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    for="State/Province"
                    class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >State/Province</label>
                  <input
                    type="text"
                    id="State/Province"
                    name="state"
                    required
                    class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="California" />
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    for="Country"
                    class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >Country</label>
                  <input
                    type="text"
                    id="Country"
                    name="country"
                    required
                    class="border bg-transparent border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="United States" />
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <div class="flex items-center pb-2">
                    <label
                      for="ZIP"
                      class="text-sm font-bold text-gray-800 dark:text-gray-100"
                      >ZIP/Postal Code</label>
                    <div
                      class="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16">
                        <path
                          class="heroicon-ui"
                          d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                          fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    name="zip"
                    required
                    id="ZIP"
                    class="bg-transparent border border-red-400 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="86745" />
                  <div
                    class="flex justify-between items-center pt-1 text-red-400">
                    <p class="text-xs">Incorrect Zip Code</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-x-circle">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="container m-auto mx-5 w-11/12 xl:w-full">
          <div class="w-full py-4  sm:px-0 bg-white dark:bg-gray-800 flex">
            <button
              class="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-strange-black dark:text-indigo-600 px-6 py-2 text-xs mr-4"
              >Cancel</button>
            <button
              class="bg-red-700 focus:outline-none transition duration-150 ease-in-out hover:bg-red-600 rounded text-white px-8 py-2 text-sm"
              type="submit">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>

<style>
  .checkbox:checked {
    /* Apply class right-0*/
    right: 0;
  }
  .checkbox:checked + .toggle-label {
    /* Apply class bg-indigo-700 */
    background-color: #4c51bf;
  }
</style>
