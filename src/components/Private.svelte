<script>
  import { User } from 'sveltefire'
  import 'firebase/auth'

  import { SignIn } from '../routes'

  export let view

  function storeUser(e) {
    const userInfo = e.detail.user
    console.log('Юзер авторизовался', userInfo)
    // TODO PRIVATE перенести на регистрацию и записать в базу
  }
</script>

<User persist={localStorage} let:user on:user={storeUser} let:auth>
  <!-- не авторизован -->
  <div slot="signed-out" class="my-4">
    <button
      class="text-white border border-white p-2 rounded-xl"
      on:click={() => auth.signInAnonymously()}>Анонимный вход</button>
    <SignIn />
  </div>
  <!-- авторизован -->
  <button
    class="text-white border border-white p-2 rounded-xl"
    on:click={() => auth.signOut()}>Выйти</button>
  <p class="text-white">
    {user.uid}
    {console.log(user)}
    <svelte:component this={view} />
  </p>
</User>
