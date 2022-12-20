<template>
  <div class="cont">
    <div class="inner">
      <h1> Create Post </h1>
      <div class="inputs">
        <Transition>
          <div class="error" v-if="error"> Please Fill All Fields, Otherwise It Will Not Be Posted </div>
        </Transition>
        <Transition>
          <div class="success" v-if="success"> Post Successfully Added To The Database </div>
        </Transition>
        <input type="text" id="" placeholder="Author..." v-model="authorV">
        <input type="text" id="" placeholder="Title..." v-model="titleV">
        <textarea cols="30" rows="10" placeholder="Description..." v-model="descriptionV"></textarea>
        <button @click="createPost"> Create </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      authorV: "",
      titleV: "",
      descriptionV: "",
      error: false,
      success: false
    }
  },
  methods: {
    createPost(){
      if(this.authorV && this.titleV && this.descriptionV){
        this.error = false
        axios.post(`${this.$store.state.API_URL}/api/posts`, {
          author: this.authorV,
          title: this.titleV,
          body: this.descriptionV
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
        this.success = true;
        setTimeout(() =>{
          this.$router.push({ name: 'Home' })
        }, 1000)
      }else{
        this.error = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins';
  .cont{
    transform: 0 70px;
    overflow: hidden;
    .inner{
      margin: 50px 40px;
      padding: 10px;
      h1{
        color: white;
      }
      .inputs{
        margin-top: 15px; 
        @include flex(flex-start, flex-start);
        flex-direction: column;
        gap: 10px;

        .v-enter-from,
        .v-leave-to{
          translate: 30px;
          opacity: 0;
        }
        .v-enter-active,
        .v-leave-active{
          transition: .5s;
        }
        .success{
          width: 50vw;
          background: rgba(23, 175, 35, 0.918);
          border-radius: 5px;
          border: 0;
          color: white;
          font-size: 20px;
          padding: 5px;

        }
        .error{
          width: 50vw;
          background: rgba(255, 0, 0, 0.685);
          border-radius: 5px;
          border: 0;
          color: white;
          font-size: 20px;
          padding: 5px;
        }
        input, textarea{
          width: 60vw;
          height: 30px;
          outline: none;
          border-radius: 5px;
          border: 0;
          padding-left: 10px;
          color: #383838;
          transition: .5s ease-in-out;
          font-size: 15px;
          &:hover{
              background: rgba(255, 255, 255, 0.685);
          }
        }
        textarea{
          transition: none;
          width: 70vw;
          height: 70px;
          &:hover{
            background: #fff;
          }
        }
        button{
          height: 30px;
          background: rgb(23, 175, 35);
          border: 0;
          border-radius: 5px;
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
  }
</style>