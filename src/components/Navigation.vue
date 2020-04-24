<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <button class="btn btn-outline-light" type="button">Search</button>
          </div>
          <input type="text" class="form-control" placeholder="Search Stock Symbol" />
        </div>
      </div>
      <a class="navbar-brand px-5" href="#">
        <router-link to="/">
          <h1>StockTracker</h1>
        </router-link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> |
      <ul class="navbar-nav px-5 align-baseline">
        <li>
          <router-link to="/about">
            <h5>About</h5>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a,
a:hover {
  color: white;
  text-decoration: none;
}
</style>
