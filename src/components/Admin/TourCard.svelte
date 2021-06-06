<script>
  import { TourView } from "./";

  // TODO markdown description
  // npm i marked
  // import marked from 'marked'
  // {@html marked(description)}

  export let tour;

  import { getContext } from "svelte";
  const app = getContext("firebase").getFirebase();
  const firestore = app.firestore();

  function deleteTour() {
    let tourRef = firestore.doc(`/Tours/${tour.id}`);

    tourRef
      .delete()
      .then(() => console.log("=== TourView: tour deleted "))
      .catch((error) =>
        console.error("=== TourView: tour NOT deleted ", error)
      );
  }

  let view = false;
</script>

<tr>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex items-center">
      <div class="flex-shrink-0 h-10 w-10">
        <img
          class="h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
          alt=""
        />
      </div>
      <div class="ml-4">
        <div class="text-sm font-medium text-gray-900">
          <span>{tour.name}</span>
        </div>
      </div>
    </div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">
      <span>{tour.country}</span>
    </div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">
      <span>{tour.area}</span>
    </div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">
      <span>{tour.city}</span>
    </div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">
      <span>{tour.hotel}</span>
    </div>
  </td>

  <td class="px-6 py-4 whitespace-nowrap">
    <span
      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
    >
      Нет
    </span>
  </td>

  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">
      <span>4.9</span>
    </div>
  </td>

  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    <a
      href="#"
      class="text-indigo-600 hover:text-indigo-900"
      on:click={() => {
        view = true;
      }}>Изменить</a
    >&nbsp;
    <a
      href="#"
      class="text-indigo-600 hover:text-indigo-900"
      on:click={deleteTour}>Удалить</a
    >
  </td>
  {#if view}
    <TourView {tour} closeFunction={() => (view = false)} />
  {/if}
</tr>
