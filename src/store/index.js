import Vuex from 'vuex';
import auth from './modules/auth';
import image from './modules/image';
import Vue from "vue";

// must call Vue.use(vuex) before create store instance
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        image
    }
});