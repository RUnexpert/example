import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import MyInput from './components/MyInput.vue';

const app = createApp(App);
app.component('MyInput', MyInput);
app.mount('#app');
