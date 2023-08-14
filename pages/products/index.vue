<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products',
});

// fetch the products
const fetchIns = $fetch.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  onRequest({ request, options }) {
    // Log request
    console.log('[fetch request]', request, options);

    options.query = options.query || {};
    options.query.t = new Date();

    const token = '123';
    if (token) {
      options.headers.Authorization = `Bearer ${token}`;
    }
  },
});

const products = await fetchIns('/products');

const { data } = await useAsyncData('products', () => fetchIns('/products'));

console.log(data);

useHead({
  title: 'Nuxt Dojo | Merch',
  meta: [{ name: 'description', content: 'Nuxt 3 Merch' }],
});
</script>

<style scoped></style>
