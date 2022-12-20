<template>
  <div class="posts" id="posts">
    <h1 ref="text"> Posts </h1>
    <div class="inner">
        <div class="search">
            <input type="text" id="" placeholder="Search For Posts..." v-model="query">
            <button @click="getData"> Search </button>
        </div>
        <div class="grid">
            <Post v-for="(item, index) in postData" :key="index" :data="item" />
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Post from '../components/gridComponent.vue'

export default {
    components: {
        Post
    },
    data(){
        return{
            postData: null,
            query: ""
        }
    },
    methods: {
        async getData(){
            const res = await axios.get(`${this.$store.state.API_URL}/api/posts?title=${this.query}`)
            this.postData = res.data.data;
        },
    },
    created(){
        axios.get(`${this.$store.state.API_URL}/api/posts`)
            .then(res => {
                this.postData = res.data.data
            });
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';
.posts{
    translate: 0 45px;
    overflow-y: hidden;
    .inner{
        padding: 10px;
        .grid{
            margin-top: 40px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            justify-items: center;
        }
        .search{
            height: 50px;
            @include flex(center, flex-end);
            // gap: 2px;
            input{
                width: calc(100%);
                height: 30px;
                outline: none;
                border-radius: 5px 0 0 5px;
                border: 0;
                padding-left: 10px;
                color: #383838;
                transition: .5s ease-in-out;
                &:hover{
                    background: rgba(255, 255, 255, 0.685);
                }
            }
            button{
                height: 30px;
                background: rgb(23, 175, 35);
                border: 0;
                border-radius: 0 5px 5px 0;
                color: white;
                font-size: 18px;
                padding: 5px;
                cursor: pointer;
                transition: .5s ease-in-out;
                &:hover{
                    background: rgba(23, 175, 35, 0.918);
                    box-shadow: 0 0 4px rgba(23, 175, 35, 0.918)
                }
            }
        }
    }
    h1{
        color: white;
        text-align: center;
    }
}

@media screen and (max-width: 800px){
    .posts{
        .inner{
            .grid{
                grid-template-columns: 1fr;
            }
        }
    }
}
</style>