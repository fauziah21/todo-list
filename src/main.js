import { createApp } from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue'
import Navbar from './components/Navbar.vue';

import router from './router';
import mixins from './mixins';
import store from './store';

//plugin
import moshaToast from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

const app = createApp(App);

//global components
app.component('navbar-component', Navbar);
app.mixin(mixins);
app.use(router);
app.use(store);

//library
axios.defaults.baseURL = 'https://api.steinhq.com/v1/storages/61fb3ea08d29ba2379186ae4';
app.use(moshaToast);
app.use(VueAxios, axios);

app.mount('#app');
