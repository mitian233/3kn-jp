<script setup lang="ts">
import Home from "~/components/home.vue"
const showMenu = useShowMenuState()
const showMenuButton = useShowMenuButtonState()
const menuAnimation = useMenuAnimationState()
const bgBlack = useBgBlackState()
</script>

<template>
  <Transition :name="(menuAnimation ? 'slide' : undefined)">
    <Home v-if="showMenu" class="fixed top-0 right-0 left-0 bg-white" />
  </Transition>
  <Transition name="fade">
    <div v-if="showMenuButton" class="fixed top-3 right-3">
      <button @click="showMenu = !showMenu" :class="[(bgBlack && (!showMenu && 'text-white')), 'duration-100']">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        </svg>
      </button>
    </div>
  </Transition>
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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
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
