<template>
  <div class="card mb-2 shadow h-50">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="newsInfo.urlToImage" class="card-img p-1" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{newsInfo.title}}</h5>
          <p class="card-text text-break newsDescription">{{newsInfo.description}}</p>
          <p class="card-text">
            <small
              class="text-muted"
            >Last updated {{new Date(newsInfo.publishedAt).toLocaleString()}} by {{newsInfo.author}}</small>
          </p>
          <a :href="newsInfo.url" class="stretched-link" target="_blank"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    newsInfo: Object
  }
};
</script>

<style scoped>
.card {
  /* max-height: 200px; */
}
p.newsDescription {
  font-size: 10px;
}
.card-title {
  font-size: 15px;
}
img {
  width: 200px;
}
</style>