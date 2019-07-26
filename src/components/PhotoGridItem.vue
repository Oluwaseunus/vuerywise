<template>
  <div class="photo-grid-container">
    <img :src="photo.urls.small" alt="Item" class="photo-grid-item" />
    <div class="photo-grid-details">
      <p class="photo-grid-name">{{ photo.user.name }}</p>
      <p v-if="photo.user.location" class="photo-grid-location">{{ photo.user.location }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PhotoGridItem",
    props: {
      photo: Object
    }
  };
</script>