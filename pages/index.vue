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
  title: 'Welcome | ' + siteConfig.title,
  meta: [
    {name: 'theme-color', content: '#000000'},
    {name: 'apple-mobile-web-app-capable', content: 'yes'},
    {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},
    {name: 'og:title', content: 'Welcome - ' + siteConfig.title},
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
