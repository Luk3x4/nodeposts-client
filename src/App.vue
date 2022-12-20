<template>
    <div class="container">
        <navbar />
        <router-view> </router-view>
    </div>
</template>

<script>
import navbar from './components/NavBar.vue'

export default {
    components: {
        navbar
    },
    data(){ 
        return {

        }
    },
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}
html, body{
    overflow-x: hidden;
    scroll-behavior: smooth;
    background: #171c24;
    min-height: 3000px;
}
</style>