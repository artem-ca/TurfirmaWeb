<script>
  import { Flight } from "../Tickets";
  import { flights } from "../store.js";
</script>

<!-- TODO: количество пассажиров передавать для увеличения стоимости -->
{#each $flights as flight (flight)}
  <Flight {flight} />
{/each}
