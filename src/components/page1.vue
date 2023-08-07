<script setup>
import {onMounted, ref} from "vue";
import smoothScroll from '../share/smoothScroll.js';
const loaded = ref(false);
onMounted(() => {
  loaded.value = true;
})

</script>

<template>
  <div id="page1" class="min-h-screen max-w-screen relative overflow-hidden">
    <div class="h-screen max-w-screen absolute">
      <video autoplay muted loop class="min-h-screen max-w-screen object-cover">
        <source src="../assets/bg.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="w-full min-h-screen flex flex-col justify-center bg-black text-white bg-opacity-50 absolute">
      <div class="flex flex-row justify-center">
        <div class="flex flex-col justify-center">
          <transition name="slide">
            <div v-if="loaded">
              <div class="w-fit md:max-w-[30vw] max-w-[70vw] text-white">
                <a href="https://3kn.jp">
                  <img src="../assets/logo.svg" alt="logo" />
                </a>
              </div>
              <div class="rounded-3xl text-center mt-5">
                <a class="hover:text-blue-400 duration-500" href="#page2" v-on:click.prevent="smoothScroll('#page2')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down-circle inline" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </transition>
        </div>
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
