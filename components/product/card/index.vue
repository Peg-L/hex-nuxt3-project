<script setup>
defineProps({
  imageSrc: String,
  altText: String,
  title: String,
  price: String,
  buttonText: String,
});
</script>

<template>
  <div class="card" style="width: 18rem">
    <ProductCardImg :imageSrc="imageSrc" :altText="altText" />
    <div class="card-body">
      <ProductCardTitle :title="title" />
      <ProductCardPrice :price="price" />
      <ProductCardButton :buttonText="buttonText" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
}
</style>
