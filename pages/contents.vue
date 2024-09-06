<script setup lang="ts">
import siteConfig from "~/site.config";

useHead({
  title: 'Contents | ' + siteConfig.title,
  meta: [
    {name: 'og:title', content: 'Contents | ' + siteConfig.title},
  ]
})
const bgBlack = useBgBlackState()
bgBlack.value = false
const building = false
const projects = [
  {
    img: '/cover/tks-suki.png',
    title: 'まいにちつーちゃん',
    link: 'https://tsukushi.bangdream.moe/',
  },
  {
    img: '/cover/twitter-transparent-avatar.png',
    title: 'Twitter Transparent Avatar',
    link: 'https://upic.3kn.jp/',
  },
  {
    img: '/cover/astro-theme-akiba.png',
    title: 'Astro Theme Akiba',
    link: 'https://github.com/mitian233/astro-theme-akiba',
  },
  {
    img: '/cover/chunithm-cn-tools.png',
    title: 'CHUNITHM CN Tools',
    link: 'https://chunithm.bangdream.moe/',
  },
  {
    img: '/cover/mygo-fansite.png',
    title: 'MyGO Fansite (Chinese)',
    link: 'https://mygo-fansite.vercel.app/',
  },
  {
    img: '/cover/anontokyo-com.png',
    title: 'ANONTOKYO',
    link: 'https://www.anontokyo.com/',
  },
  {
    img: '/cover/sekai-stickers.png',
    title: 'Sekai Stickers (Modified)',
    link: 'https://st.3kn.jp/',
  },
  {
    img: '/cover/kigurumi-bangdream.png',
    title: 'Kigurumi BanGDream',
    link: 'https://kigurumi.bangdream.moe/',
  },
  {
    img: '/cover/shizuku.png',
    title: 'Shizuku meme maker',
    link: 'https://shizuku.netlify.pwq.app/',
  },
  {
    img: '/cover/popipa.png',
    title: 'Poppin\'Party Lyrics Generator',
    link: 'https://popipa.bangdream.moe/',
  },
]
</script>

<template>
  <div class="min-h-[100svh] flex flex-col">
    <div class="font-['Poppins']">
      <h1 class="pt-4 pl-4 text-4xl font-bold tracking-[.25em]">CONTENTS</h1>
    </div>
    <div v-if="building" class="flex-auto p-4 flex justify-center items-center">
      NOW BUILDING...
    </div>
    <div v-else class="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 contents-container">
      <div v-for="item in projects">
        <a class="group relative h-full w-full" :href="item.link" target="_blank">
          <img v-if="item.img" :src="item.img" class="object-cover w-full h-full group-hover:scale-125 duration-300"/>
          <div class="absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center">
            <p>{{ item.title }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contents-container div {
  width: 100%;
  aspect-ratio: 2/1;
  overflow: hidden;
}

@media (min-width: 768px) {
  .contents-container div {
    aspect-ratio: 16/9;
  }
}
</style>
