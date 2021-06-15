<script>
  import { Flight } from "../Tickets"
  import { flights } from "../store.js"
</script>

<!-- TODO: количество пассажиров передавать для увеличения стоимости -->
<!-- {console.log("=== FLIGHTLIST: ", $flights)} -->
{#each $flights as flight (flight)}
  <Flight {flight} />
{/each}
