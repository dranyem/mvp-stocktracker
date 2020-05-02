<template>
  <div class="card mt-2 shadow">
    <div class="card-header">News Section</div>
    <div class="card-body newsContainer">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  </div>
</template>

<script>
import NewsCard from "./NewsCard";
export default {
  name: "NewsSection",
  components: {
    NewsCard
  }
  created: {
    this.$store.dispatch("newsList");
  }
};
</script>

<style scoped>
.card {
  color: white;
  background-color: #424c6a;
  height: 408px;
}
.newsContainer {
  overflow: auto;
}
</style>