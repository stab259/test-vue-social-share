<template>
  <div class="card text-center">
    <img :src="product.image" alt="product thumb" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <nuxt-link :to="`/products/${product.id}`">
      <p class="btn my-4">View details</p>
    </nuxt-link>
  </div>
</template>

<script setup>
const props = defineProps(['product']);
const { product } = toRefs(props);
</script>

<style scoped></style>
