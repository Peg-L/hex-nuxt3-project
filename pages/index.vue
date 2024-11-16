<script setup>
const { getNews, newsList, isLoading } = useHome();
await getNews();

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
</script>

<template>
  <div class="container">
    <h1>最新消息</h1>
    <NewsCard v-for="news in newsList" :key="news.id" v-bind="news" />
    <ClientOnly>
      <Loading v-model:active="isLoading" />
    </ClientOnly>
  </div>
</template>

<style scoped></style>
