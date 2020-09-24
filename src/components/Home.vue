<template>
  <div>
    <h1>{{ hello }}</h1>
    <div>
      <ol>
        <li v-for="product in products" :key="product.name">
          {{ product.name }}, ${{ product.price }}
        </li>
      </ol>
      <ol>
        <li v-for="product in saleProducts" :key="product.name">
          {{ product.name }}, ${{ product.price }}
        </li>
      </ol>
      <button @click="reducePrice">Reduce price</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hello() {
      return this.$store.state.hello;
    },
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    },
  },
  methods: {
    reducePrice() {
      // this.$store.state.products.forEach((product) => {
      //   product.price -= 1;
      // });
      this.$store.commit('reducePrice')
    },
  },
};
</script>
