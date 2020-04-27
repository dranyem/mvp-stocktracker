<template>
  <div class="container-fluid">
    <MyStocks />
    <StockInfoModal v-if="!isModalHidden" :stockInfo="stock" />
    <div class="row">
      <div class="col-sm-8">
        <NewsSection />
      </div>
      <div class="col-sm-4">
        <PopularStocks />
      </div>
    </div>
  </div>
</template>

<script>
import MyStocks from "@/components/MyStocks.vue";
import StockInfoModal from "@/components/StockInfoModal.vue";
import NewsSection from "@/components/NewsSection.vue";
import PopularStocks from "@/components/PopularStocks.vue";
export default {
  name: "Home",
  components: {
    MyStocks,
    StockInfoModal,
    NewsSection,
    PopularStocks
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
