import api from '../../api/imgur';
import router from '../../router';
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin: ({ commit }, hash) => {
        const queryObject = qs.parse(hash.replace('#', ''));

        commit('setToken', queryObject.access_token);
        window.localStorage.setItem('imgur_token', queryObject.access_token);

        // renew router
        router.push('/');
    },
    logout: ({ commit }) => {

        // do not call mutation directly
        commit('setToken', null);

        // must clean token when logout
        window.localStorage.removeItem('imgur_token');
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}