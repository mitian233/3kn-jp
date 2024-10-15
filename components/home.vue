<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const showMenu = useShowMenuState()
const showMenuIcon = useShowMenuButtonState()
const menuAnimation = useMenuAnimationState()
const pushRouter = (target: string) => {
  if (isCurrentPath(target)) {
    showMenu.value = false
    return
  }
  if (target !== '/') {
    showMenuIcon.value = true
    menuAnimation.value = true
    router.push(target)
    router.isReady().then(() => {
      showMenu.value = false
    })
  } else {
    showMenuIcon.value = false
    menuAnimation.value = false
    router.push(target)
    router.isReady().then(() => {
      showMenu.value = true
    })
  }
}

const isCurrentPath = (path: string) => route.path === path
</script>

<template>
  <div class="h-[100dvh] w-full">
    <div class="h-full w-full flex flex-col pt-8 pl-8 font-['Poppins']">
      <div class="mb-8 flex flex-row">
        <NuxtLink v-if="!isCurrentPath('/')" @click.prevent="pushRouter('/')" to="/">
          <h1 class="font-bold text-6xl mb-2 tracking-[.25em]">3KN</h1>
          <p class="font-bold tracking-[.25em]">mikan official website</p>
        </NuxtLink>
        <div v-else>
          <h1 class="font-bold text-6xl mb-2 tracking-[.25em]">3KN</h1>
          <p class="font-bold tracking-[.25em]">mikan official website</p>
        </div>
      </div>
      <NuxtLink @click.prevent="pushRouter('/about')" to="/about"
                :class="['text-4xl hover:bg-black hover:text-white duration-100', (isCurrentPath('/about') && 'cursor-not-allowed')]">
        <p :class="['py-3 font-bold tracking-[.25em]', (isCurrentPath('/about') && 'line-through')]">ABOUT</p>
      </NuxtLink>
      <NuxtLink @click.prevent="pushRouter('/blog')" to="/blog"
                :class="['text-4xl hover:bg-black hover:text-white duration-100', (isCurrentPath('/about') && 'cursor-not-allowed')]">
        <p :class="['py-3 font-bold tracking-[.25em]', (isCurrentPath('/blog') && 'line-through')]">BLOG</p>
      </NuxtLink>
      <NuxtLink @click.prevent="pushRouter('/contents')" to="/contents"
                :class="['text-4xl hover:bg-black hover:text-white duration-100', (isCurrentPath('/contents') && 'cursor-not-allowed')]">
        <p :class="['py-3 font-bold tracking-[.25em]', (isCurrentPath('/contents') && 'line-through')]">CONTENTS</p>
      </NuxtLink>
      <Links/>
    </div>
  </div>
</template>

<style scoped>

</style>
