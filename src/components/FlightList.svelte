<script>
  import { Flight } from './'
  import { flights } from '../store.js'
</script>


<!-- TODO: количество пассажиров передавать для увеличения стоимости -->
{#each $flights as flight (flight)}
  <Flight {flight} />
{/each}
