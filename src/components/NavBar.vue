<template>
    <nav :class="{ shadow: !expanded}" ref="nav"> 
        <header>
            <router-link :to="{ name: 'Home' }" @click="shrinkNav"> NodePosts </router-link>
        </header>
        <div :class="{ links: true, active: expanded }">
            <a style="cursor: pointer;" @click="ToPost"> Posts</a>
            <router-link :to="{ name: 'Create' }" @click="shrinkNav"> Create Post </router-link>
        </div>
            <div :class="{burger: true, x: expanded}" @click="toggleNav">
                <span></span>
                <span></span>
                <span></span>
            </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            expanded: false
        }
    },

    methods:{
        toggleNav(){
            this.expanded = !this.expanded
        },
        shrinkNav(){
            this.expanded = false;
            window.scrollTo(0, 0)
        },
        ToPost(){
            const el = document.querySelector('.posts')
            if(this.$route.fullPath != '/'){
                this.$router.push({name: 'Home', hash: '#posts'})
            }else{
                window.scrollTo(0, el.offsetTop - this.$refs.nav.getBoundingClientRect().height)
            }
            this.expanded = false;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins'; 

nav{
    @include flex(space-around, center);
    background: #161b22;
    height: 40px;
    position: fixed;
    width: 100%;
    z-index: 999;
    &.shadow{
        box-shadow: 0 1px 4px rgb(12, 3, 39);
    }
    .router-link-exact-active,
    .router-link-active{
        color: rgb(88, 221, 88)
    }
    header{
        height: 100%;
        @include flex(flex-start, center)
    }
    a{
        text-decoration: none;
        color: white;
        font-size: 20px;
        transition: .5s ease-in-out;
        padding: 5px;
        &:hover{
            background: rgb(148, 148, 148);
            border-radius: 10px;
        }
    }
    .links{
        @include flex(flex-start, center);
        gap: 15px;
    }
        .burger{
            display: none;
            span{
                display: block;
                width: 30px;
                height: 3px;
                background: white;
                margin: 5px;
                border-radius: 5px;
            }
            cursor: pointer
        }
}



@media(max-width: 900px){
    nav{
        justify-content: space-between;
        z-index: 999;
        header, .burger{
            margin: 0 10px;
        }
        .burger{
            display: block;
            span{
                transition: .5s ease-in-out
            }
        }
        .links{
            background: #161b22;
            display: none;
            position: absolute;
            flex-direction: column;
            @include flex(center, flex-start);
            width: 100%;
            z-index: -1;
            opacity: 0;
            transition: .5s ease-in-out;
            top: 40px;
            height: 100px;
            transform: translateY(-60px);
            a{
                margin: 0 10px;
            }
        }
        .active{
            transform: translateY(0);
            opacity: 1;
        }
        .active ~ .burger{
            span:nth-child(1){
                rotate: 45deg;
                translate: 0 3px;
            }
            span:nth-child(2){
                opacity: 0;
            }
            span:nth-child(3){
                rotate: -45deg;
                translate: 0 -13px;
            }
        }    
    }
}
</style>