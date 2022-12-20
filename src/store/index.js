import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            API_URL: 'https://nodeposts-rest-api-production-cd4b.up.railway.app'
        }
    }
})

export default store;