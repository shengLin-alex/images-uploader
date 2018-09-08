<template>
    <div>
        <AppHeader></AppHeader>
        <router-view></router-view>
    </div>
</template>

<script>
    import AppHeader from './components/AppHeader'
    import AuthHandler from "./components/AuthHandler";

    export default {
        name: 'App',
        components: {
            AuthHandler,
            AppHeader
        }
    }
</script>