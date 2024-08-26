import { createApp } from 'vue';

import './index.css';

import App from './App.vue';
import router from '../router';
import store from '../store';
import MyInput from 'lib';

const app = createApp(App);
app.use(MyInput);
app.use(router).use(store).mount('#app');
