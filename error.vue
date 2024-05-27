<script setup>
import siteConfig from "./site.config"
const router = useRouter()
useHead({
  title: 'Error - ' + siteConfig.title
})
const goBack = () => {
  return router.go(-1)
}
</script>

<template>
<div class="w-full h-[100svh] flex flex-col justify-center items-center">
  <h1 class="text-8xl">Error</h1>
  <button class="super-link text-xl" @click="goBack">Back</button>
</div>
</template>

<style scoped>

</style>
