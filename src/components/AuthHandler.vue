<template>
    <div>
        Please wait...
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'AuthHandler',
        methods: {

            // ... mean there can define other method eg. xxx() {}
            ...mapActions(['finalizeLogin'])
        },
        created() {
            this.finalizeLogin(window.location.hash);
        }
    }
</script>