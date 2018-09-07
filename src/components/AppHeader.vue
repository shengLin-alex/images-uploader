<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">
            image uploader
        </a>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <a class="item">Galleries</a>
                <a class="item">Upload</a>
                <a class="item" href="#" @click="logout">Logout</a>
            </div>
            <a v-else href="#" class="ui item" @click="login">
                Login
            </a>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'AppHeader',
        computed: {

            // ... mean there can define other computed func eg. xxx() {}
            ...mapGetters(['isLoggedIn'])
        },
        methods: {

            // ... mean there can define other method eg. xxx() {}
            ...mapActions(['login', 'logout'])
        }
    }
</script>

<style scoped>
    .horizontal {
        display: flex;
        flex-direction: row;
    }
</style>