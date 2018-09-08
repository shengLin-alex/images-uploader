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

    // { commit } 解構賦值的語法
    // commit 使實際狀態發生改變的同步操作
    // dispatch 某事件發生的意圖
    // commit 用來說明一個使 mutation 狀態發生改變的操作; dispatch 用來觸發一個 action
    finalizeLogin: ({ commit }, hash) => {
        const queryObject = qs.parse(hash.replace('#', ''));

        // means context.commit()
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