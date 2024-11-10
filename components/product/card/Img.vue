<script setup>
defineProps({
  imageSrc: String,
  altText: String,
});
</script>

<template>
  <img :src="imageSrc" class="card-img-top" :alt="altText" />
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  object-fit: cover;
}
</style>
