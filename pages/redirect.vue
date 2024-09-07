<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'page-slide'
  }
})
useHead({
  title: 'Redirecting...'
})
const route = useRoute()
const query = route.query

onMounted(async () => {
  console.debug(query?.url)
  if(query?.url === '' || query?.url) {
    new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
      window.location.href = query.url as string
    })
  } else {
    createError({
      statusCode: 403,
      statusMessage: 'Forbidden'
    })
    console.debug('No destination')
  }
})
</script>

<template>
<div class="h-[100svh] w-full flex flex-col justify-center items-center">
  <p v-if="query?.url">Redirecting you to <a :href="(query?.url as string)">{{ query?.url }}</a>...</p>
  <p v-else>No destination</p>
</div>
</template>

<style scoped>
.page-slide-enter-active,
.page-slide-page-leave-active {
  height: 100dvh;
  overflow: hidden;
  transition: all 1000ms;
}
.page-slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}
.page-slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
</style>
