<script setup>
import axios from "axios"

</script>

<template>
   <div>
    <h1 class="text-center"> Photos</h1>

    <div class="container">
    <h2> {{sekiller.title}} </h2>
    <h3>{{sekiller.id}}</h3>
    <img :src="sekiller.url" alt="">
    </div>
   </div>
</template>



<script>
   export default {
    data(){
        return {
      sekiller : ''

        }
    },
    created()  {
        let id = this.$route.params.id
    this.axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(({ data }) => {
        this.sekiller = data;
      });
  

    }
   }

</script>
