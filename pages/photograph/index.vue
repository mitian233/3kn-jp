<script setup lang="ts">
import siteConfig from "~/site.config";

useHead({
  title: "Photograph | " + siteConfig.title,
  meta: [{ name: "og:title", content: "Photograph | " + siteConfig.title }],
});

const allPosts = await queryCollection('photograph').order('date', 'DESC').all();
</script>

<template>
  <div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 contents-container">
    <div v-for="(item, index) in allPosts" :key="index">
      <NuxtLink class="group relative h-full w-full" :to="item.path">
        <img
            v-if="item.cover"
            :src="item.cover"
            class="object-cover w-full h-full blur-sm group-hover:scale-125 group-hover:blur-0 duration-300"
        />
        <div
            class="absolute left-0 top-0 right-0 bottom-0 flex flex-col bg-white bg-opacity-25 justify-center items-center group-hover:opacity-0 group-hover:scale-125 duration-300"
        >
          <p>{{ item.title }}</p>
          <p>{{ item.date }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>