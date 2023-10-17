<script setup>
import scrollReveal from "scrollreveal";
import {onMounted} from "vue";

onMounted(() => {
  scrollReveal().reveal(".page3revealLeft", {
    delay: 300,
    duration: 1000,
    distance: "50px",
    origin: "left",
    reset: true,
  });
  scrollReveal().reveal(".page3revealRight", {
    delay: 300,
    duration: 1000,
    distance: "50px",
    origin: "right",
    reset: true,
  });
});
</script>

<template>
<div id="page2" class="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 my-bg overflow-hidden font-['Poppins']">
  <div class="bg-gradient-to-b from-orange-300 md:bg-gradient-to-r">
    <div class="w-full h-full flex flex-col justify-center p-10 page3revealLeft">
      <h1 class="pl-5 font-bold text-5xl md:text-5xl my-text-gradient">Hello, </h1>
      <h1 class="pl-5 font-bold text-5xl md:text-5xl">I'm <span class="my-text-gradient-2">Mikan</span></h1>
    </div>
  </div>
  <div class="flex flex-col justify-center items-center md:items-start p-10 page3revealRight">
    <div class="rounded-full overflow-hidden w-3/5">
      <img src="../assets/img.png"/>
    </div>
  </div>
</div>
</template>

<style scoped>
.my-bg::before{
  content: "";
  background: url('../assets/william-warby-ld4wZGqlLF4-unsplash.jpg') fixed no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.5;
}

.my-text-gradient {
  background-image: -webkit-linear-gradient(315deg, #f2973b 25%, #fef1b4);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.my-text-gradient-2 {
  background-image: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
