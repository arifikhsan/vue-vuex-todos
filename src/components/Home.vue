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
      <button @click="reducePrice(4)">Reduce price</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    // hello() {
    //   return this.$store.state.hello;
    // },
    // products() {
    //   return this.$store.state.products;
    // },
    // saleProducts() {
    //   return this.$store.getters.saleProducts;
    // },
    ...mapState(["hello", "products"]),
    ...mapGetters(["saleProducts"]),
  },
  methods: {
    // reducePrice(amount) {
    //   this.$store.dispatch("reducePrice", amount);
    // },
    ...mapActions(['reducePrice'])
  },
};
</script>
