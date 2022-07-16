<script setup>
import axios from "axios"

</script>

<template>
    <div>
        <h1 class="text-center"> Blog Detail </h1>

<div class="container">
    <h1> {{detailPost.title}} </h1>


<p> {{detailPost.body}} </p>

<p> {{detailPost.userId}} </p>
</div>

    </div>
</template>

<script>
export default {

data(){
    return {
        detailPost : ""
    }
},


      created() {
        let id = this.$route.params.id
    this.axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => {
      this.detailPost = data;
      });
  },
}
</script>