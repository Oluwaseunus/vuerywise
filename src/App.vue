<template>
  <div id="app">
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
  import PhotoGridItem from "./components/PhotoGridItem";

  export default {
    components: {
      PhotoGridItem
    },
    data() {
      return {
        photos: [],
        search: ""
      };
    },
    methods: {
      handleSubmit() {
        console.log(this.search);
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

<style lang="scss">
  #app {
    margin: auto;
  }

  .search-container {
    width: 100%;
    height: 25vh;
    background-color: #dde2e9;

    form {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        border: none;
        height: 40%;
        width: 70%;
        border-radius: 15px;
        box-shadow: 0 4px 12px 0px #dde2e9;

        &:focus {
          outline: none;
        }
      }
    }
  }
</style>