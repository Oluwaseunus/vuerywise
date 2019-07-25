<template>
  <div>
    <div class="search-container">
      <form v-if="showSearchBar" @submit.prevent="handleSubmit">
        <input v-model="search" type="text" placeholder="Search for photo" class="search-box_input" />
      </form>

      <p v-if="!showSearchBar" class="search-text">
        Showing results for
        <span class="search-quote">"{{ searchItem }}"</span>
      </p>
    </div>

    <div class="pictures-container" v-if="photos.length">
      <PhotoGridItem v-for="photo in photos" :key="photo.id" :photo="photo" />
    </div>
  </div>
</template>

<script>
  import PhotoGridItem from "./PhotoGridItem";

  export default {
    components: {
      PhotoGridItem
    },
    data() {
      return {
        photos: [],
        search: "",
        showSearchBar: true
      };
    },
    computed: {
      searchItem() {
        return this.search[0].toUpperCase() + this.search.slice(1);
      }
    },
    methods: {
      handleSubmit() {
        if (this.search.trim()) this.showSearchBar = !this.showSearchBar;
      }
    },
    mounted() {
      fetch(
        `https://api.unsplash.com/search/photos?client_id=${process.env.VUE_APP_ACCESS}&query='African'`
      )
        .then(response => response.json())
        .then(data => (this.photos = data.results))
        .then(() => console.log(this.photos));
    }
  };
</script>