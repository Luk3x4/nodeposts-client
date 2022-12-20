<template>
  <div class="cont">
    <Header />
    <Posts />
    <Transition>
      <div class="scroller" v-if="scroll > 500" @click="scrollUp"> <span class="material-symbols-outlined">arrow_upward</span> </div>
    </Transition>
  </div>
</template>

<script>
import Header from '../components/HeaderComp.vue'
import Posts from '../components/PostsComp.vue'

export default {
    components: {
      Header,
      Posts
    },
    data() {
        return {
          scroll: null,
        }
    },
    methods: {
      scrollUp(){
        window.scrollTo(0,0)
      }
    },
    created(){
      window.addEventListener('scroll', () => {
        this.scroll = window.scrollY
      })
    }
}
</script>

<style lang="scss" scoped>
.cont{
  .v-enter-from,
  .v-leave-to{
    opacity: 0;
    translate: 50px 0;
  }

  .v-enter-active,
  .v-leave-active{
    transition: all .5s ease-in-out;
  }
  .scroller{
    position: fixed;
    bottom: 40px;
    right: 40px;
    border-radius: 10px;
    background: #161b22;
    color: white;
    padding: 10px 10px 7px 10px;
    border: 1px solid #083e47;
    cursor: pointer;
    transition: all .5s ease-in-out;
    &:hover{
      background: #545b66ce;
    }
  }
}
</style>