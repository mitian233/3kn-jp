<script setup lang="ts">

</script>

<template>
  <NuxtPage class="relative"/>
  <Menu />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 500ms;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(100%);
  position: absolute;
}
.page-leave-to {
  opacity: 0;
  /*filter: blur(1rem);*/
  transform: translateY(-100%);
  position: absolute;
}
</style>

