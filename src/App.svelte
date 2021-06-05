<script>
  import { Router, Route } from "svelte-routing";

  import firebase from "firebase/app";
  import firebaseConfig from "./firebase/config.json";

  import { FirebaseApp } from "sveltefire";

  import { Nav, TestNav, Footer } from "./components/Site";

  import {
    Private,
    AdminTours,
    AdminHotels,
    AdminClients,
    AdminApplications,
    AdminBooking,
  } from "./components/Admin";

  import {
    Home,
    Tours,
    Tickets,
    Faq,
    SignIn,
    SignUp,
    Profile,
    Admin,
  } from "./routes";

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  // api.getToken().then((data) => console.log(data));

  // api.getFlights("PAR", 200).then((data) => console.log(data));

  // let promise = api.getFlights("PAR", 200);

  export let url = "";
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
      <Route path="admin"><Admin /></Route>
      <Route path="tours_admin"><AdminTours /></Route>
      <Route path="hotels_admin"><AdminHotels /></Route>
      <Route path="clients_admin"><AdminClients /></Route>
      <Route path="applications_admin"><AdminApplications /></Route>
      <Route path="booking_admin"><AdminBooking /></Route>
    </div>
    <Footer />
  </Router>
</FirebaseApp>
