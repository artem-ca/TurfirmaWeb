<script>
  import { Link } from "svelte-routing";
</script>

<nav class="sm:max-w-screen-xl  m-auto ">
  <div
    class="h-10 mx-5 border-2 border-strange-gray mb-10 pt-2 text-center space-x-5 rounded-b-xl"
  >
    <Link to="tours_admin">
      <button class="w-16 border border-darkest-gray rounded-md"> Туры </button>
    </Link>
    <Link to="hotels_admin">
      <button class="w-16 border border-darkest-gray rounded-md">
        Отели
      </button>
    </Link>
    <Link to="clients_admin">
      <button class="w-16 border border-darkest-gray rounded-md">
        Клиенты
      </button>
    </Link>
    <Link to="applications_admin">
      <button class="w-16 border border-darkest-gray rounded-md">
        Заявки
      </button>
    </Link>
    <Link to="booking_admin">
      <button class="w-16 border border-darkest-gray rounded-md">
        Брони
      </button>
    </Link>
  </div>
</nav>
