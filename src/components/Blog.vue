 <script setup>
import axios from "axios"
import { RouterLink } from "vue-router";
</script>
 
 <template>
  <div>
    <h1 class="text-center">Blog</h1>

    <div class="container">
      <div class="row">
        <div v-for="key of posts" :key="key" class="col-4">
          <div class="card p-3">
            <RouterLink
              :to="{
                name: 'Detail',
                params: {
                  slug: key.title,
                  id: key.id,
                },
              }"
            >
              <h3>{{ key.title }}</h3>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: "",
    };
  },

  created() {
    this.axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        this.posts = data;
      });
  },
};
</script>