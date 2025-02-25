<script setup lang="ts">
const PageRef = ref<HTMLDivElement | null>(null);
const beforeEnter = () => PageRef.value?.classList.add("overflow-hidden");
const afterLeave = () => PageRef.value?.classList.remove("overflow-hidden");

onMounted(() => {
  console.log(`%c3kn%c.jp`, "color: black;font-size: 20px;background-color: white;", "color: white;font-size: 20px;background-color: #ff8899;");
  console.log(`点击链接加入群聊【小猫你可以吃芝士汉堡】：https://qm.qq.com/q/ZIXmUrY6oa`);
})
</script>

<template>
  <div ref="PageRef" class="h-[100svh] w-full relative">
    <NuxtPage
      :transition="{
        name: 'page',
        onBeforeEnter: beforeEnter,
        onAfterLeave: afterLeave,
        onLeaveCancelled: afterLeave,
      }"
      class="relative"
    />
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
