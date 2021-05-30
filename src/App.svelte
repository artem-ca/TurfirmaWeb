<script>
  import {
    Nav,
    Footer,
    TestNav,
    TourSearch,
    TourCard,
    HomeTourCard,
    ToursLine,
    Private,
  } from './components'
  import { Home, Tours, Tickets, Faq, SignIn, SignUp, Profile } from './routes'
  import { Router, Route } from 'svelte-routing'

  import firebase from 'firebase/app'
  import firebaseConfig from './firebase/config.json'

  import { FirebaseApp } from 'sveltefire'

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  } else {
    firebase.app()
  }

  // api.getToken().then((data) => console.log(data));

  // api.getFlights("PAR", 200).then((data) => console.log(data));

  // let promise = api.getFlights("PAR", 200);

  export let url = ''
</script>

<FirebaseApp {firebase}>
  <Router {url}>
    <Nav />
    <div id="check" class="pt-12 bg-strange-gray">
      <Route path="/"><Home /></Route>
      <Route path="tours"><Tours /></Route>
      <Route path="tickets"><Tickets /></Route>
      <Route path="test"><TestNav /></Route>
      <Route path="faq"><Faq /></Route>
      <Route path="signin"><SignIn /></Route>
      <Route path="signup"><SignUp /></Route>
      <Route path="profile" view={Profile} component={Private} />
    </div>
    <Footer />
  </Router>
</FirebaseApp>
