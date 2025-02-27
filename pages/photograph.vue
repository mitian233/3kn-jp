<script setup lang="ts">
import siteConfig from "~/site.config";

const PageRef = ref<HTMLDivElement | null>(null);
const beforeEnter = () => PageRef.value?.classList.add("overflow-hidden");
const afterLeave = () => PageRef.value?.classList.remove("overflow-hidden");

const useSuperLink = computed(() => useRoute().name === "photograph-slug");

useHead({
  title: "Photograph | " + siteConfig.title,
  meta: [{name: "og:title", content: "Photograph | " + siteConfig.title}],
});
</script>

<template>
  <div class="min-h-[100svh] flex flex-col">
    <div class="font-['Poppins']">
      <div class="pt-4 pl-4 flex flex-row items-center cursor-pointer">
        <button
            :class="['text-4xl font-bold tracking-[.25em] cursor-default duration-100', useSuperLink && 'cursor-pointer bg-black text-white hover:bg-white hover:text-black']"
            @click="useSuperLink && useRouter().push('/photograph')">PHOTOGRAPH
        </button>
      </div>
    </div>
    <div ref="PageRef" class="min-h-[100svh] w-full relative">
      <NuxtPage
          :transition="{
        name: 'slide',
        onBeforeEnter: beforeEnter,
        onAfterLeave: afterLeave,
        onLeaveCancelled: afterLeave,
      }"
          class="relative"/>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  overflow: hidden;
  transition: all 500ms;
}

.slide-enter-from {
  opacity: 0;
  /*transform: translateY(100%);*/
  transform: translateY(25%);
  /*transform-origin: 50% 50%;*/
  position: absolute;
}

.slide-leave-to {
  opacity: 0;
  /*filter: blur(1rem);*/
  transform: translateY(25%);
  /*transform-origin: 50% 50%;*/
  position: absolute;
}
</style>