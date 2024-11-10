<script setup lang="ts">
import Btn from './Btn.vue';
</script>

<template>
  <div>
    <div class="fz-xl">1. 下面是原本 h2 h3 正常的大小</div>
    <h2>h2 文字</h2>
    <h3>h3 文字</h3>

    <div class="fz-xl">2. 下面是加上同一個 class <strong>fz-sm</strong> 的 h2 h3 大小</div>
    <div>成功使用 variable 的變數來設定 class 的 font size</div>
    <h2 class="fz-sm">h2 文字</h2>
    <h3 class="fz-sm">h3 文字</h3>

    <div class="fz-xl">3. 成功透過 auto import 和 使用 import from 方式引入的兩組 button</div>
    <BoxBtn />
    <Btn />
  </div>
</template>

<style lang="scss" scoped>
.fz-xl {
  font-size: $fs-xl;
}
.fz-sm {
  font-size: $fs-sm;
}
</style>
