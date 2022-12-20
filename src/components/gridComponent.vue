<template>
    <div class="post">
        <div class="inner">
            <h3> By: {{ data.author }} </h3>
            <h2> {{ data.title }}</h2>
            <router-link :to="{ name: 'SinglePost', params: { id: data._id } }">
                <span class="material-symbols-outlined">search</span>
                 Details
             </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins';

.post{
    width: 100%;
    height: 150px;
    background: #161b22;
    border: 2px solid green;
    border-radius: 10px;
    padding: 10px;
    color: white;
    .inner{
        @include flex(space-around, center);
        flex-direction: column;
        height: 100%;
        h3{
            font-weight: 300;
            font-size: 20px;
            text-transform: capitalize;
        }
        h2{
            font-weight: 300;
        }
        a{
            text-decoration: none;
            background: rgba(11, 92, 199, 0.918);
            color: white;
            @include flex(center, center);
            padding: 7px;
            border-radius: 5px;
            font-size: 18px;
            transition: .5s ease-in-out;
            &:hover{
                background: rgba(11, 92, 199, 0.747)
            }
        }
    }
}
</style>