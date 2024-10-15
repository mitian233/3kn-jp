<script setup lang="ts">
defineProps<{id:string}>()
</script>

<template>
  <div class="mb-2">
    <h2 class="font-sans mb-2 mt-4 no-underline md:text-4xl text-2xl font-bold" :id="id"><a :href="`#${id}`" @click.prevent="smoothScroll(id)"><slot /></a></h2>
    <hr/>
  </div>
</template>
