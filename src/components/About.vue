<script setup>
import { RouterLink } from "vue-router";
import axios from "axios"
</script>

<template>
    <div>
        <h1 class="text-center"> About </h1>
        <div class="container">
          <div class="row">
            <div v-for="key of aboutPhoto" :key="key" class="col-4">
            <div class="card">
              <RouterLink :to="{
                name : 'Photo',
                params :{
                  slug : key.title,
                  id : key.id
                }
              }">  <h3>{{key.title}}</h3>

              </RouterLink>
           
            </div>

            </div>
          </div>
        </div>

        
    </div>
</template>


<script>
export default {
  data(){
    return{
        aboutPhoto :''
    }
  },
    created() {
    this.axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(({ data }) => {
        this.aboutPhoto = data;
      });
  },
}

</script>