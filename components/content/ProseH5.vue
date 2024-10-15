<script setup lang="ts">
defineProps<{id:string}>()
</script>

<template>
  <h5 class="font-sans my-1 no-underline md:text-xl text-base font-bold" :id="id"><a :href="`#${id}`"><slot /></a></h5>
</template>
