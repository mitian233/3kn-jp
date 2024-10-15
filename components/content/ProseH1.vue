<script setup lang="ts">
defineProps<{id:string}>()
</script>

<template>
  <div class="mb-2">
    <h1 class="font-sans mb-2 mt-4 no-underline md:text-5xl text-3xl font-bold" :id="id"><a :href="`#${id}`" @click.prevent="smoothScroll(id)"><slot /></a></h1>
    <hr/>
  </div>
</template>
