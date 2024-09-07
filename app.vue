<script setup lang="ts">
const router = useRouter()
const PageRef = ref<HTMLDivElement | null>(null)
const beforeEnter = () => PageRef.value?.classList.add('overflow-hidden')
const afterLeave = () => PageRef.value?.classList.remove('overflow-hidden')
</script>

<template>
  <div ref="PageRef" class="h-[100svh] w-full relative">
    <NuxtPage :transition="{
      name: 'page',
      onBeforeEnter: beforeEnter,
      onAfterLeave: afterLeave,
      onLeaveCancelled: afterLeave
    }" class="relative"/>
  </div>
  <Menu />
</template>

<style>
.page-enter-active,
.page-leave-active {
  height: 100dvh;
  overflow: hidden;
  transition: all 1000ms;
}
.page-enter-from {
  opacity: 0;
  /*transform: translateY(100%);*/
  scale: 0.5;
  transform-origin: 50% 50%;
  position: absolute;
}
.page-leave-to {
  opacity: 0;
  /*filter: blur(1rem);
  transform: translateY(-100%);*/
  scale: 1.5;
  transform-origin: 50% 50%;
  position: absolute;
}
</style>

