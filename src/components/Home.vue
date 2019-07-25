<template>
  <div>
    <div class="search-container">
      <form @submit.prevent="handleSubmit">
        <input v-model="search" type="text" placeholder="Search for photo" class="search-box_input" />
      </form>
    </div>

    <div class="pictures-container" v-if="photos.length">
      <PhotoGridItem v-for="photo in photos" :key="photo.id" :photo="photo" />
    </div>
  </div>
</template>

<script>
  import PhotoGridItem from "./PhotoGridItem";
  import searchAPI from "../helpers/searchAPI";

  export default {
    name: "Home",
    components: {
      PhotoGridItem
    },
    data() {
      return {
        photos: [],
        search: ""
      };
    },
    computed: {
      searchItem() {
        return this.search[0].toUpperCase() + this.search.slice(1);
      }
    },
    methods: {
      handleSubmit() {
        const trimmedSearch = this.search.trim();

        if (trimmedSearch) {
          this.$router.push({
            path: "search",
            query: {
              q: trimmedSearch
            }
          });
        }
      }
    },
    async mounted() {
      this.photos = await searchAPI("africa");
    }
  };
</script>