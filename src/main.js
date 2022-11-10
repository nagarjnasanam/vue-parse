// import { createApp } from 'vue'
// import App from './App.vue'
import router from './router'
// import Parse from "parse";



// createApp(App).use(router).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import Parse from "parse";

Parse.initialize(
    "FLUQLYXEx5gdrPbizfUHQii6DG2MdhFKz1qb9KF2",
    "bEYlR9CSTF9lGzYExb1augpS1XKJDpxDNyn2fXnL"
  ); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
  Parse.serverURL = "https://parseapi.back4app.com/";
  Parse.masterKey = "w712AHeCgCOT8bTDEyTr8ks82TL5L5TbWjhsx4e4";

createApp(App).use(router).mount('#app')
