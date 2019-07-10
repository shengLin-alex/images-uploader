<template>
    <div v-if="isLoggedIn" class="dropper">
        <!-- $ 代表告訴 vue 要拿接到的事件下面 target.files -->
        <input type="file" multiple @change="uploadImages($event.target.files)" accept="image/*"/>
        <span>Drag files here!</span>
    </div>
    <h2 v-else>Login to get started.</h2>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'UploadForm',
        computed: {
            ...mapGetters(['isLoggedIn'])
        },
        methods: {
            ...mapActions(['uploadImages'])
        }
    };
</script>

<style scoped>
    .dropper {
        height: 30vh;
        border: 2px dashed black;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .dropper:hover {
        background-color: #eee;
    }

    input {
        width: 100%;
        height: 30vh;
        position: absolute;
        opacity: 0;
    }
</style>