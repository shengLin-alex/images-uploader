import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store/index';
import router from './router';
import dotenv from 'dotenv';

// *坑 in vue runtime all .env variables' name must start with "VUE_APP_"
dotenv.config();

Vue.use(VueRouter);

const VUE = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');