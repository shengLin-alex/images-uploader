import Vue from 'vue';
import App from './App';
import dotenv from 'dotenv';

// in vue runtime all .env variables' name must start with "VUE_APP_"
dotenv.config();

new Vue({
   render: h => h(App),
}).$mount('#app');