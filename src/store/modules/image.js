import api from '../../api/imgur';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {

    async fetchImages({ rootState, commit }) {

        // 解構賦值的語法
        const { token } = rootState.auth;

        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}