import { createApp } from 'vue'
import Notifications from "@kyvg/vue3-notification";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue'
import router from './router'
import store from './store'
import mitt from "mitt";
const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(store).use(Notifications).use(VueSweetalert2).use(router).mount('#app')
