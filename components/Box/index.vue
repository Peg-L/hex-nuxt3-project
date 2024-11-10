<script setup lang="ts">
import Btn from './Btn.vue';
</script>

<template>
  <div>
    <h1>測試</h1>
    <h2>測試</h2>
    <h1 class="title">測試</h1>
    <h2 class="title">測試</h2>
    <BoxBtn />
    <Btn />
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: $fs-sm;
}
</style>
