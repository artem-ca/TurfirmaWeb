<script>
  import { Nav, FlightList, Flight, Search } from './components'
  import { Router, Link, Route } from 'svelte-routing'
  import { Home, Tours } from './routes'

  import { testFlights } from './utils/data'

  // api.getToken().then((data) => console.log(data));

  // api.getFlights("PAR", 200).then((data) => console.log(data));

  // let promise = api.getFlights("PAR", 200);

  export let url = ''
</script>

<!-- <Nav /> -->

<!-- <Search /> 
<FlightList />  -->

<Router {url}>
  <!-- <nav class="font-bold mt-20"> 
    <Link to="/">Home</Link>
    <Link to="tours">Tours</Link>
  </nav> -->
  <Nav />
  <div id="check" class="pt-10">
    <!-- <Route path="tours"><Tours /></Route>
    <Route path="/"><Home /></Route> -->
    <Route path="tickets">
      <Search />
      <Flight flight={testFlights[0]} />
    </Route>
    <Route path="/"><Home /></Route>
  </div>
</Router>
