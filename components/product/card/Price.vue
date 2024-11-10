<script setup>
defineProps({
  price: String,
});
</script>

<template>
  <p class="card-text">{{ price }}</p>
</template>

<style lang="scss" scoped></style>
