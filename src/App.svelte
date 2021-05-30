<script>
  import {
    Nav,
    Footer,
    TestNav,
    TourSearch,
    TourCard,
    HomeTourCard,
    ToursLine,
  } from './components'
  import { Home, Tours, Tickets, Faq, SignIn, SignUp, Profile } from './routes'
  import { Router, Route } from 'svelte-routing'

  // api.getToken().then((data) => console.log(data));

  // api.getFlights("PAR", 200).then((data) => console.log(data));

  // let promise = api.getFlights("PAR", 200);

  export let url = ''
</script>

<Router {url}>
  <Nav />
  <div id="check">
    <Route path="/"><Home /></Route>
    <Route path="tours"><Tours /></Route>
    <Route path="tickets"><Tickets /></Route>
    <Route path="test"><TestNav /></Route>
    <Route path="faq"><Faq /></Route>
    <Route path="signin"><SignIn /></Route>
    <Route path="signup"><SignUp /></Route>
    <Route path="profile"><Profile /></Route>
  </div>
  <Footer />
</Router>
