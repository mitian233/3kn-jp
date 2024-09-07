<script setup lang="ts">
import siteConfig from "~/site.config"

const showMenu = useShowMenuState()
const showMenuIcon = useShowMenuButtonState()
const menuAnimation = useMenuAnimationState()
showMenuIcon.value = false
showMenu.value = true
useHead({
  title: 'Home | ' + siteConfig.title,
  meta: [
    {name: 'og:title', content: 'Home | ' + siteConfig.title},
  ]
})
</script>

<template>
  <div/>
</template>

<style scoped>

</style>
