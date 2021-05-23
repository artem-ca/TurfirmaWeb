<script>
  import { Nav } from './components'
  import { Router, Route } from 'svelte-routing'
  import { Home, Tours, Tickets } from './routes'

  // api.getToken().then((data) => console.log(data));

  // api.getFlights("PAR", 200).then((data) => console.log(data));

  // let promise = api.getFlights("PAR", 200);

  export let url = ''
</script>

<Router {url}>
  <Nav />
  <div id="check" class="pt-10">
    <!-- <Route path="tours"><Tours /></Route>
    <Route path="/"><Home /></Route> -->
    <Route path="tickets">
      <Tickets />
    </Route>
    <Route path="tours"><Tours /></Route>
    <Route path="/"><Home /></Route>
  </div>
</Router>
