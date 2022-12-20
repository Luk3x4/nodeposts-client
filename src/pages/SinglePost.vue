<template>
  <div class="wrapper">
    <div class="inner">
        <a @click="goBack"> <span class="material-symbols-outlined">arrow_back_ios</span> Back </a>
        <div class="content">
            <h3> Author: {{ postData.author }}</h3>
            <h2> {{ postData.title }}</h2>
            <h3> {{ postData.body }}</h3>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            postData: {},
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        }
    },
    created(){
        axios.get(`${this.$store.state.API_URL}/api/posts/${this.$route.params.id}`)
            .then(res => {
                this.postData = res.data.data;
            })
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins';
    .wrapper{
        color: white;
        translate: 0 50px;
        height: 100vh;
        @include flex(center, center);
        .inner{
            border: 2px solid green;
            border-radius: 10px;
            padding: 10px;
            width: 60vw;
            min-height: 45vh;
            a{
                font-size: 20px;
                @include flex(flex-start, center);
                cursor: pointer;
                transition: .5s ease-in-out;
                span{
                    font-size: 24px;
                }
                &:hover{
                    color: rgb(175, 175, 175)
                }
            }
            .content{
                @include flex(flex-start, center);
                flex-direction: column;
                gap: 10px;
                padding-top: 15px;
                h3{
                    text-align: center;
                }
            }
        }
    }
</style>