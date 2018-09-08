import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler';
import UploadForm from './components/UploadForm';
import ImageList from './components/ImageList';

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/oauth2/callback', component: AuthHandler },
        { path: '/upload', component: UploadForm },
        { path: '/', component: ImageList }
    ]
});