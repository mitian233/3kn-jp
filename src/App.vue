<script setup>
import page1 from './components/page1.vue';
import Page2 from "./components/page2.vue";
import pageFooter from "./components/footer.vue";
import Page3 from "./components/page3.vue";
</script>

<template>
  <div>
    <page1 />
    <page2 />
    <page3 />
    <page-footer />
  </div>
</template>

<style scoped lang="css">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
