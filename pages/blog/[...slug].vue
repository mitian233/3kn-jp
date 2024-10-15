<script setup lang="ts">
import {useDayjs} from "#dayjs"
import siteConfig from "~/site.config"
const dayjs = useDayjs()
</script>

<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <div class="min-h-[100svh] flex flex-col">
        <div class="flex-auto px-4 pt-4 w-full">
          <h1 class="md:text-6xl text-4xl font-extrabold mt-5 mb-3 font-title-mono">{{ doc.title }}</h1>
          <p class="md:text-base text-sm pb-3">{{ dayjs(doc.date).format('YYYY/MM/DD HH:mm:ss') }}</p>
          <div class="md:text-xl min-w-fit w-full" id="document">
            <ContentRenderer :value="doc" >
              <ContentRendererMarkdown :value="doc" class="w-full post-default prose md:prose-md">
                {{ doc }}
              </ContentRendererMarkdown>
            </ContentRenderer>
          </div>
        </div>
      </div>
    </ContentDoc>
  </div>
</template>

<style scoped>

</style>
