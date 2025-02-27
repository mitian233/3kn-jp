<script setup lang="ts">
import siteConfig from "~/site.config";

const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`photograph-${slug}`, () => queryCollection("photograph").path(`/photograph/${slug}`).first());
useHead({
  title: (post?.value?.title || "Page Not Found") + ' | ' + siteConfig.title,
  meta: [
      { name: "og:title", content: (post?.value?.title || "Photograph") + ' | ' + siteConfig.title },
      { name: "og:description", content: post?.value?.description },
      { name: "og:image", content: post?.value?.cover },
  ],
})
</script>

<template>
  <div class="w-full">
    <template v-if="post">
      <div class="p-4">
        <div class="mb-3 border-r-[10px] border-b-[1px] border-black">
          <h1 class="text-3xl font-bold">{{ post.title }}</h1>
          <p class="text-sm text-gray-500">{{ post.date }}</p>
          <p>{{ post.description }}</p>
        </div>
        <ContentRenderer :value="post" class="prose" />
        <div class="pb-10 text-right">
          <a href="https://creativecommons.org/" class="inline-block" target="_blank">
            <img src="/CC-BY-NC-ND.svg" alt="CC-BY-NC-ND" class="w-24" />
          </a>
        </div>
      </div>

    </template>
    <template v-else>
      <div class="empty-page p-4">
        <h1>
          ポストが見つかりませんでした
        </h1>
        <p>
          お探しのポストは存在しないか、移動しました。
        </p>
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>
