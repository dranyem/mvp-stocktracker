<template>
  <div id="app" class>
    <div id="nav">
      <Navigation />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation
  }
};
</script>

<style>
body {
  background: #3a435e;
  color: white;
}
</style>
