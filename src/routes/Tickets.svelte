<script>
  import { Flight, Search } from '../components'

  import { testFlights } from '../utils/data'
</script>

<div class="pt-12">
  <Search />
  <Flight flight={testFlights[0]} />
</div>
