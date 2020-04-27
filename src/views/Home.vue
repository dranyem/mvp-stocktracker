<template>
  <div class="home">
    <MyStocks />
    <StockInfoModal :isHidden="isModalHidden" :stockInfo="stock" />
  </div>
</template>

<script>
import MyStocks from "@/components/MyStocks.vue";
import StockInfoModal from "@/components/StockInfoModal.vue";
export default {
  name: "Home",
  components: {
    MyStocks,
    StockInfoModal
  },
  computed: {
    isModalHidden() {
      return this.$store.getters.isModalHidden;
    },
    stock() {
      return this.$store.getters.stock;
    }
  }
};
</script>
