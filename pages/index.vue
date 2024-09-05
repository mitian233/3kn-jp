<script setup lang="ts">
import Home from "~/components/home.vue"
import siteConfig from "~/site.config"
const showMenu = useShowMenuState()
const showMenuIcon = useShowMenuButtonState()
const menuAnimation = useMenuAnimationState()
const bgBlack = useBgBlackState()
bgBlack.value = true
showMenuIcon.value = false
menuAnimation.value = false
showMenu.value = true
useHead({
  title: 'Home | ' + siteConfig.title,
  meta: [
    {name: 'og:title', content: 'Home | ' + siteConfig.title},
    {name: 'og:description', content: 'Mikan\'s Homepage'},
    {name: 'og:image', content: 'https://3kn.jp/ogp.png'},
    {name: 'og:url', content: 'https://3kn.jp/'},
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:title', content: '3kn.jp'},
    {name: 'twitter:description', content: 'Mikan\'s Homepage'},
    {name: 'twitter:image', content: 'https://3kn.jp/ogp.png'},
    {name: 'twitter:url', content: 'https://3kn.jp/'}
  ]
})
</script>

<template>
<div />
</template>

<style scoped>

</style>
