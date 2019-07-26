<template>
  <div class="search-view">
    <p class="search-text">
      Search Results for
      <span class="search-quote">"{{ query }}"</span>
    </p>
  </div>
</template>

<script>
  import searchAPI from "../helpers/searchAPI";
  export default {
    name: "SearchView",
    data() {
      return {
        loading: true,
        photos: []
      };
    },
    computed: {
      query() {
        return this.$route.query.q;
      }
    },
    async mounted() {
      this.photos = await searchAPI(this.query);
      this.loading = false;
    }
  };
</script>