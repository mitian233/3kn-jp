<script setup>
import {onMounted, ref} from "vue";
import smoothScroll from '../share/smoothScroll.js';
const loaded = ref(false);
onMounted(() => {
  loaded.value = true;
})

</script>

<template>
  <div id="page1" class="min-h-screen max-w-screen flex flex-col justify-center bg-black text-white">
    <div class="flex flex-row justify-center">
      <div class="flex flex-col justify-center">
        <transition name="slide">
          <div v-if="loaded">
            <div class="w-fit md:max-w-[30vw] max-w-[70vw]">
              <a href="https://3kn.jp">
                <img src="../assets/logo.svg" alt="Vue logo" />
              </a>
            </div>
            <div class="rounded-3xl text-center mt-5 underline">
              <a href="#page2" v-on:click.prevent="smoothScroll('#page2')">次へ</a>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}

.slide-leave-to,
.slide-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
