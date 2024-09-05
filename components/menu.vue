<script setup lang="ts">
import Home from "~/components/home.vue";
const showMenu = ref<boolean>(false);
defineProps<{
  bgBlack?: boolean
}>()
</script>

<template>
  <Transition name="fade">
    <Home v-if="showMenu" class="fixed top-0 right-0 left-0 bg-white" />
  </Transition>
  <div class="fixed top-5 right-5">
    <button @click="showMenu = !showMenu" :class="[(bgBlack && (!showMenu && 'text-white')), 'duration-100']">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes button-warp {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0.5;
  }
}

button {
  animation: button-warp 1s ease-in-out infinite alternate;
}
</style>
