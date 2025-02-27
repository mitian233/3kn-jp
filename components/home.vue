<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const showMenu = useShowMenuState();
const showMenuIcon = useShowMenuButtonState();
const menuAnimation = useMenuAnimationState();
const pushRouter = (target: string) => {
  if (target !== "/") {
    if (isCurrentPath(target)) {
      showMenu.value = false;
      return;
    }
    showMenuIcon.value = true;
    menuAnimation.value = true;
    router.push(target);
    router.isReady().then(() => {
      showMenu.value = false;
    });
  } else {
    showMenuIcon.value = false;
    menuAnimation.value = false;
    router.push(target);
    router.isReady().then(() => {
      showMenu.value = true;
    });
  }
};

const menuLinks = [
  { title: "CONTENTS", path: "/contents" },
  { title: "PHOTOGRAPH", path: "/photograph" },
  { title: "ABOUT", path: "/about" },
];

const isCurrentPath = (path: string) => route.path.indexOf(path) !== -1;
const isHome = computed(() => route.path === "/");
</script>

<template>
  <div class="h-[100dvh] w-full">
    <div class="h-full w-full flex flex-col pt-8 pl-8 font-['Poppins']">
      <div class="mb-8 flex flex-row">
        <NuxtLink
          v-if="!isHome"
          to="/"
          @click.prevent="pushRouter('/')"
        >
          <h1 class="font-bold text-6xl mb-2 tracking-[.25em]">3KN</h1>
          <p class="font-bold tracking-[.25em]">mikan official website</p>
        </NuxtLink>
        <div v-else>
          <h1 class="font-bold text-6xl mb-2 tracking-[.25em]">3KN</h1>
          <p class="font-bold tracking-[.25em]">mikan official website</p>
        </div>
      </div>
      <NuxtLink
        v-for="(item, index) in menuLinks"
        :key="index"
        :to="item.path"
        :class="[
          'text-4xl hover:bg-black hover:text-white duration-100',
          isCurrentPath(item.path) && 'bg-black text-white cursor-not-allowed',
        ]"
        @click.prevent="isCurrentPath(item.path) || pushRouter(item.path)"
      >
        <p
          :class="[
            'py-3 font-bold tracking-[.25em]',
            isCurrentPath(item.path) && 'line-through',
          ]"
        >
          {{ item.title.toUpperCase() }}
        </p>
      </NuxtLink>
      <Links />
    </div>
  </div>
</template>

<style scoped></style>
