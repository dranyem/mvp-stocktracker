<template>
  <div class="card mt-2 shadow">
    <div class="card-header">News Section</div>
    <div class="card-body newsContainer">
      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
      >
        <NewsCard v-for="(item,index) in newsList" :key="index" :newsInfo="item" />
        <!-- <h1 v-for="item in data" :key="item">{{item}}</h1> -->
        <span v-show="busy">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "./NewsCard";

export default {
  name: "NewsSection",
  components: {
    NewsCard
  },
  data() {
    return {
      busy: false,
      data: []
    };
  },
  methods: {
    loadMore: function() {
      this.busy = true;

      setTimeout(() => {
        this.$store.dispatch("addMoreNews");
        // for (var i = 0, j = 10; i < j; i++) {
        //   this.data.push({ name: i });
        // }
        this.busy = false;
      }, 1000);
    }
  },
  created() {
    this.$store.dispatch("newsList");
  },
  computed: {
    newsList() {
      return this.$store.getters.newsList;
    }
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