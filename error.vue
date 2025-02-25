<script setup lang="ts">
import siteConfig from "./site.config";
import type { NuxtError } from "#app";
const router = useRouter();
const props = defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    default: null,
  },
});
useHead({
  title:
    (props.error ? props.error?.statusCode : "Error") +
    " | " +
    siteConfig.title,
});
const goBack = () => {
  return router.go(-1);
};
</script>

<template>
  <div class="w-full h-[100svh] flex flex-col justify-center items-center">
    <h1 class="text-8xl">{{ error?.statusCode }}</h1>
    <p>{{ error?.statusMessage }}</p>
    <button class="super-link text-xl" @click="goBack">Back</button>
  </div>
</template>

<style scoped></style>
