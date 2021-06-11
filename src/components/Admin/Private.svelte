<script>
  import { User } from "sveltefire";
  import "firebase/auth";

  import { SignIn } from "../../routes";

  export let view;

  function storeUser(e) {
    const userInfo = e.detail.user;
    console.log("Юзер авторизовался", userInfo);
    // TODO PRIVATE перенести на регистрацию и записать в базу
  }
</script>

<User persist={localStorage} let:user on:user={storeUser} let:auth>
  <!-- не авторизован -->
  <div slot="signed-out" class="">
    <button
      class="text-black border-2 border-black rounded-xl p-20"
      on:click={() => auth.signInAnonymously()}>Анонимный вход</button
    >
    <SignIn />
  </div>
  <!-- авторизован -->
  <button
    class="text-black border  rounded-xl p-20"
    on:click={() => auth.signOut()}>Выйти</button
  >
  <p class="text-white">
    {user.uid}
    {console.log(user)}
    <svelte:component this={view} />
  </p>
</User>
