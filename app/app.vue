<script setup lang="ts">
import { useLoadingIndicatorState } from "~/composables/dataStore";
import pulseSvg from "@/assets/pulse.svg";

const PageRef = ref<HTMLDivElement | null>(null);
const beforeEnter = () => PageRef.value?.classList.add("overflow-hidden");
const afterLeave = () => PageRef.value?.classList.remove("overflow-hidden");
const showLoadingIndicator = useLoadingIndicatorState();

// let startTime = 0;
useRuntimeHook("page:start", () => {
  showLoadingIndicator.value = true;
  // console.debug('Page started loading!')
  // startTime = new Date().getTime();
});
useRuntimeHook("page:finish", () => {
  showLoadingIndicator.value = false;
  // console.debug('Page finished loading!', (new Date().getTime() - startTime));
});

onMounted(() => {
  console.log(
    `%c3kn%c.jp`,
    "color: black; font-size: 20px; background-color: white;",
    "color: white; font-size: 20px; background-color: #ff8899;",
  );
  console.log(
    "%cUse Mobile QQ to scan the QR code to join my QQ group",
    "font-size: 15px;",
  );
  // qrcode.generate("https://qm.qq.com/q/ZIXmUrY6oa", { small: true }, (qrcode) => {
  //   console.log(`%c${qrcode}`, "color: #ff8899; font-size: 20px; background-color: white;");
  // });
  console.log(
    `%c▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █ ▄▄█▀▀ █ █ ▄▄▄▄▄ █
█ █   █ ██▄█▀█ ▀ ██ █   █ █
█ █▄▄▄█ █ ▀ ██▄██▀█ █▄▄▄█ █
█▄▄▄▄▄▄▄█ ▀▄▀ █ ▀ █▄▄▄▄▄▄▄█
█ ▄▄█▀▄▄█▄▄█ █▀▄▀ ▄  ▄▀█  █
█▄█▀ ▄▀▄█▄▄ ▄██▀ █▀██▄ ▄█▄█
███▀▄▄▄▄▄▄  █▀ ▀  ▄ ▀███▀ █
█▄▄ █ ▄▄▀▄ ▄ ▄█▄  █▀▀▀ ▄█▄█
█▄▄▄███▄█ ▀▄ ▀ ██ ▄▄▄ ██▄▀█
█ ▄▄▄▄▄ █▀█▄▄▀▄ █ █▄█ ███ █
█ █   █ ██ ▄▄▀ ▀ ▄ ▄▄ █▀▀██
█ █▄▄▄█ █ ▄█▄▀▄▄  ██  ▄█▄▄█
█▄▄▄▄▄▄▄█▄███▄███▄█▄██▄██▄█`,
    "color: #ff8899; font-size: 20px; background-color: white;",
  );
  console.log(
    "If you can't scan the QR code, click the link following to continue: https://qm.qq.com/q/ZIXmUrY6oa",
  );
});
</script>

<template>
  <div ref="PageRef" class="min-h-[100svh] w-full relative">
    <NuxtPage
      :transition="{
        name: 'page',
        onBeforeEnter: beforeEnter,
        onAfterLeave: afterLeave,
        onLeaveCancelled: afterLeave,
      }"
      class="relative"
    />
    <Transition name="pulse">
      <div
        v-if="showLoadingIndicator"
        class="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"
      >
        <img :src="pulseSvg" style="height: 50px; width: 50px" />
      </div>
    </Transition>
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
  scale: 0.5;
  transform-origin: 50% 50%;
  position: absolute;
}
.page-leave-to {
  opacity: 0;
  scale: 1.5;
  transform-origin: 50% 50%;
  position: absolute;
}

.pulse-enter-active,
.pulse-leave-active {
  opacity: 1;
  transition: opacity 500ms;
}
.pulse-enter-from,
.pulse-leave-to {
  opacity: 0;
  transform-origin: 50% 50%;
  position: absolute;
}
</style>
