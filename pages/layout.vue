<script setup lang="ts"></script>

<template>
  <ul>
    <li>所有頁面共同的元件可以在 app.vue 中引入</li>
    <li>共同元件也可以寫在 layouts/default.vue 中，並把 app.vue 刪除</li>
    <li>也可以不刪除 app.vue，在 app.vue 中使用 {{ '<NuxtLayout></NuxtLayout>' }} 包覆 {{ '<NuxtPage />' }}</li>
    <li>layout 預設會使用 default.vue的內容</li>
  </ul>
</template>

<style scoped></style>
