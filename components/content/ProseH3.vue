<script setup lang="ts">
defineProps<{id:string}>()
</script>

<template>
  <h3 class="font-sans mb-1 mt-2 no-underline md:text-3xl text-xl font-bold" :id="id"><a :href="`#${id}`"><slot /></a></h3>
</template>
