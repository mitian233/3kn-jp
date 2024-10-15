<script setup lang="ts">
import siteConfig from "~/site.config"
import {useDayjs} from "#dayjs"
const dayjs = useDayjs()
useHead({
  title: 'Blog | ' + siteConfig.title,
  meta: [
    {name: 'og:title', content: 'Blog | ' + siteConfig.title},
  ]
})

</script>

<template>
  <div class="min-h-[100svh] flex flex-col">
    <div class="font-['Poppins']">
      <h1 class="pt-4 pl-4 text-4xl font-bold tracking-[.25em]">BLOG</h1>
    </div>
    <div class="flex-auto px-4 pt-4">
      <ContentList :query="{ sort: [{ date: -1 }] }" path="/blog" v-slot="{ list }">
        <ul>
          <li v-for="post in list" :key="post.id" class="py-4">
            <nuxt-link :to="`${post._path}`">
              <div class="md:flex justify-between flex-wrap">
                <div>
                  <h2 class="md:text-4xl text-2xl text-primary hover:text-primary-content ease-in-out duration-500">{{
                      post.title
                    }}</h2>
                  <p class="text-secondary md:text-base text-sm">
                   {{ dayjs(post.date).format('YYYY-MM-DD') }} {{ dayjs(post.date).format('HH:mm:ss') }}
                  </p>
                  <p>{{ post.snippet }}</p>
                </div>
                <div class="md:max-h-[150px] md:w-[250px] w-full my-4 rounded-lg overflow-hidden">
                  <img class="w-full" :src="post.cover">
                </div>
              </div>
              <hr/>
            </nuxt-link>
          </li>
        </ul>
      </ContentList>
    </div>
  </div>
</template>

<style scoped>

</style>
