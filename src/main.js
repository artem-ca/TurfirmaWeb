import "./global.postcss"

import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

// document.querySelector("#elast").oninput = function () {
//   let val = this.value.trim();
//   let elasticCards = document.querySelector();

//   if (val != '') {
//     elasticCards.forEach
//   }
// };

export default app
