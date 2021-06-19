<script>
  import { getContext } from "svelte"

  import { ApplicationView } from "./"

  export let application

  const app = getContext("firebase").getFirebase()
  const firestore = app.firestore()

  function deleteApplication() {
    let applicationRef = firestore.doc(`/Applications/${application.id}`)

    applicationRef
      .delete()
      .then(() => console.log("=== TourView: tour deleted "))
      .catch((error) => console.error("=== TourView: tour NOT deleted ", error))
  }

  let view = false
</script>

<tr>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex items-center">
      <div class="ml-4">
        <div class="text-sm font-medium text-gray-900">
          <span>{application.name}</span>
        </div>
      </div>
    </div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">
      <span>{application.email}</span>
    </div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">
      <span>{application.phone}</span>
    </div>
  </td>

  <td
    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex flex-row justify-center"
  >
    <span
      href="#"
      class="text-indigo-600 hover:text-indigo-900 cursor-pointer"
      on:click={() => {
        view = true
      }}>Подробнее</span
    >&nbsp;
    <span
      href="#"
      class="mx-2 text-red-600 hover:text-red-900 cursor-pointer"
      on:click={deleteApplication}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </span>
  </td>
  {#if view}
    <ApplicationView {application} closeFunction={() => (view = false)} />
  {/if}
</tr>
