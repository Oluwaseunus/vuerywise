<template>
  <div class="photo-grid-item" :style="style">
    <div class="photo-grid-details">
      <p class="photo-grid-name">{{ photo.user.name }}</p>
      <p v-if="photo.user.location" class="photo-grid-location">{{ photo.user.location }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      photo: Object
    },
    computed: {
      style() {
        return {
          backgroundImage: `url(${this.photo.urls.small})`
        };
      }
    }
  };
</script>