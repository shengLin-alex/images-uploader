import Vue from 'vue';
import App from './App';
import store from './store/index';
import dotenv from 'dotenv';

// *坑 in vue runtime all .env variables' name must start with "VUE_APP_"
dotenv.config();

const VUE = new Vue({
    store,
    render: h => h(App),
}).$mount('#app');