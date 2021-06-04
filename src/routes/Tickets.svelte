<script>
  import { Search, Flight } from "../components/Tickets";

  import { testFlights } from "../utils/data";
</script>

<div class="pt-12">
  <Search />
  <Flight flight={testFlights[0]} />
  <Flight flight={testFlights[0]} />
  <Flight flight={testFlights[0]} />
</div>
