<script setup>
defineProps({
  title: String,
});
</script>
<template>
  <h2 class="card-title fw-bold">{{ title }}</h2>
</template>

<style lang="scss" scoped>
.card-title {
  margin-top: 14px;
}
</style>
