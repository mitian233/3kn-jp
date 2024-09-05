<script setup lang="ts">

</script>

<template>
  <NuxtPage/>
  <Menu />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  position: absolute;
}
</style>

