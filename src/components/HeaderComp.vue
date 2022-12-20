<template>
    <div class="cont">
      <div class="wrapper">
        <h1> Welcome To NodePosts </h1>
        <div class="inner">
            <router-link :to="{ name: 'Create'}"> Create Post </router-link>
            <a @click="toPost"> Browse Posts </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        toPost(){
            const el = document.querySelector('.posts');
            window.scrollTo(0, el.offsetTop - document.querySelector('nav').getBoundingClientRect().height);
            document.querySelector('.links').classList.remove('active')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins';

.cont{
    width: 100%;
    height: 100vh;
    z-index: -9;
    overflow-y: hidden;
    background: linear-gradient(#161b22, #083e47);
        @include flex(center, center);
        flex-direction: column;
    .wrapper{
        h1{
            color: white;
            text-align: center;
            animation: text 2.5s;
            font-size: 2rem;
        }

        @keyframes text{
            from{
                translate: -50px 0;
                opacity: 0;
            }
            to{
                translate: 0 0;
                opacity: 1;
            }
        }
        .inner{
            flex-direction: column;
            @include flex(center, center);
            height: 100%;
            gap: 10px;
            a{
                text-decoration: none;
                color: white;
                padding: 7px 10px;
                background: rgba(23, 175, 35, 0.918);
                border-radius: 5px;
                cursor: pointer;
                font-size: 20px;
                transition: .5s ease-in-out;
                animation: button 2s;
                &:hover{
                    background: rgba(23, 175, 36, 0.726)
                }
                &:nth-child(2){
                    background: rgba(11, 92, 199, 0.918);
                    &:hover{
                        background: rgba(24, 87, 168, 0.829)
                    }
                }
            }
            @keyframes button{
                from{
                    translate: 0 40px;
                    opacity: 0;
                }
                to{
                    translate: 0 0;
                    opacity: 1;
                }
            }
        }
    }
}
</style>