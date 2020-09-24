<template>
  <div>
    <h1>Home</h1>
    <div>
      <ul>
        <li v-for="product in products" :key="product.name">
          {{ product.name }}, ${{ product.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
