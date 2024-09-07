<script setup lang="ts">
const showMenu = useShowMenuState()
const showMenuButton = useShowMenuButtonState()
const menuAnimation = useMenuAnimationState()
const bgBlack = useBgBlackState()
const route = useRoute()

const subAniPlay = ref<boolean>(false)

if(route.path === '/') {
  subAniPlay.value = true
} else {
  subAniPlay.value = false
}

watch(() => showMenu.value, async (newVal, oldValue) => {
  if(newVal === true && oldValue === false) {
    await new Promise(resolve => setTimeout(resolve, 1))
  }
  subAniPlay.value = showMenu.value
})

watch(()=>route.path, ()=>{
  if(route.path !== '/') {
    showMenuButton.value = true
    menuAnimation.value = true
  } else {
    showMenuButton.value = false
    // menuAnimation.value = false
  }
})
</script>

<template>
  <Transition :name="(menuAnimation ? 'slide' : undefined)">
    <div v-show="showMenu" class="fixed top-0 right-0 left-0 bg-white overflow-y-auto">
      <Home :class="[(subAniPlay ? 'translate-y-0' : '-translate-y-20'), 'duration-200 ease']"/>
    </div>
  </Transition>
  <Transition name="fade">
    <div v-if="showMenuButton" class="fixed top-3 right-3">
      <button @click="showMenu = !showMenu"
              :class="[(bgBlack && (!showMenu && 'text-white')), 'duration-100 button-animation', (showMenu && 'button-animation-stop')]">
        <svg
            width="60"
            height="60"
            viewBox="0 0 26.45833 26.45833"
            version="1.1"
            id="svg1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
          <defs
              id="defs1" />
          <g
              id="layer1">
            <circle
                style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                id="path2"
                cx="13.229167"
                cy="13.229167"
                r="10.126478" />
          </g>
        </svg>


      </button>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: all 200ms ease;
  overflow: hidden;
  height: 100dvh;
}

.slide-leave-active {
  transition: all 200ms ease;
  height: 100dvh;
}

.slide-enter-from,
.slide-leave-to {
  height: 0;
  overflow: hidden;
}

@keyframes button-warp {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.7);
    opacity: 0.5;
  }
}

.button-animation {
  animation: button-warp 1s ease-in-out infinite alternate;
}

.button-animation-stop {
  animation-play-state: paused;
}
</style>
