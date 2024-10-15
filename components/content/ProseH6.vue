<script setup lang="ts">
defineProps<{id:string}>()
</script>

<template>
  <h6 class="font-sans my-1 no-underline md:text-xl text-base font-bold" :id="id"><a :href="`#${id}`"><slot /></a></h6>
</template>
