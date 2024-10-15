<script setup lang="ts">
defineProps<{id:string}>()
</script>

<template>
  <h4 class="font-sans my-1 no-underline md:text-2xl text-base font-bold" :id="id"><a :href="`#${id}`"><slot /></a></h4>
</template>
