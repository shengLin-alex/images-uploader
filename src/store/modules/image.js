import api from '../../api/imgur';
import router from '../../router';

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
    },
    async uploadImages({ rootState, commit }, images) {

        // get the access token
        const { token } = rootState.auth;

        // call api to upload
        await api.uploadImages(images, token);

        // redirect to ImageList
        router.push('/');
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