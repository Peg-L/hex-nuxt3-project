<script setup lang="ts"></script>

<template>
  <Home />
  <h1>共用區塊</h1>
  <p>
    頁面上的共用區塊 (header、footer)可以寫在 app.vue 內。或是寫在 layouts/default.vue 內。<br />
    寫在 layouts/default.vue 內的話，可以選擇把 app.vue 刪除，或是在 app.vue 中使用 {{ '<NuxtLayout></NuxtLayout>' }}
    包覆 {{ '<NuxtPage />' }} 。
  </p>
</template>

<style scoped></style>
