<script>
  import firebase from "firebase/app"
  import firebaseConfig from "./firebase/config.json"

  import { FirebaseApp } from "sveltefire"

  import { Router, Route } from "svelte-routing"

  import { Nav, TestNav, Footer } from "./components/Site"

  import { Private } from "./components/Admin"

  import {
    Home,
    Tours,
    Tickets,
    Faq,
    SignIn,
    SignUp,
    Profile,
    AdminTours,
    AdminClients,
    AdminApplications,
    AdminBooking,
  } from "./routes"

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  } else {
    firebase.app()
  }

  // api.getToken().then((data) => console.log(data));

  // api.getFlights("PAR", 200).then((data) => console.log(data));

  // let promise = api.getFlights("PAR", 200);

  export let url = ""
</script>

<FirebaseApp {firebase}>
  <Router {url}>
    <Nav />
    <div id="check" class="bg-pale-white">
      <Route path="/"><Home /></Route>
      <Route path="tours"><Tours /></Route>
      <Route path="tickets"><Tickets /></Route>
      <Route path="test"><TestNav /></Route>
      <Route path="faq"><Faq /></Route>
      <Route path="signin"><SignIn /></Route>
      <Route path="signup"><SignUp /></Route>
      <Route path="profile" view={Profile} component={Private} />
      <Route path="admin/tours"><AdminTours component={Private} /></Route>
      <Route path="admin/clients"><AdminClients /></Route>
      <Route path="admin/applications"><AdminApplications /></Route>
      <Route path="admin/booking"><AdminBooking /></Route>
    </div>
    <Footer />
  </Router>
</FirebaseApp>
