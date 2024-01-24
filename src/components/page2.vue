<script setup>
import scrollReveal from "scrollreveal";
import {onMounted} from "vue";

onMounted(() => {
  scrollReveal().reveal(".page2revealLeft", {
    delay: 300,
    duration: 1000,
    distance: "50px",
    origin: "left",
    reset: true,
  });
  scrollReveal().reveal(".page2revealRight", {
    delay: 300,
    duration: 1000,
    distance: "50px",
    origin: "right",
    reset: true,
  });
});
</script>

<template>
  <div class="min-h-[70vh] md:min-h-screen grid grid-cols-1 md:grid-cols-5 overflow-hidden" id="page2">
    <div class="p-6 flex flex-row md:justify-center md:col-span-2 page2revealLeft">
      <div class="flex flex-col justify-center">
        <div class="text-6xl md:text-7xl font-bold">
          <p>Hi,👋</p>
          <p>I'm <span class="name">Mikan</span></p>
        </div>
        <div class="text-xl md:text-2xl">
          <p>Front-end / Web Developer / Student</p>
        </div>
      </div>
    </div>
    <div class="p-6 flex flex-col justify-center text-lg md:col-span-3 page2revealRight">
      <table class="w-full border-separate">
        <tbody>
        <tr>
          <td class="left-cell">I am&nbsp;</td>
          <td>
            <p>
              Active contributor of Hexo theme
              <a href="https://github.com/Fechin/hexo-theme-diaspora" class="super-link">Diaspora</a>,
              Diving-fish's
              <a href="https://github.com/Diving-Fish/maimaidx-prober" class="super-link">maimaidx prober</a>
              contributor
            </p>
            <p><!--链接就在下方-->
              Developed some useful tools, links are below :)
            </p>
            <p></p>
          </td>
        </tr>
        <tr>
          <td class="left-cell min-w-[6em]">About&nbsp;</td>
          <td>
            <p>Third-rate University student. Who's coding skills is all self-taught. Excel at transforming design
              concepts into responsive web applications. With a meticulous eye for detail and a dedication to clean
              code, can actively contribute to open-source projects, pushing the boundaries of web development.
              Advocating for accessibility and usability, who strive to create inclusive digital experiences. Committed
              to collaboration, who stay updated on emerging technologies, continually enhancing whose skills to make
              meaningful contributions to the dynamic field of front-end development.</p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.name {
  z-index: 0;
  background-image: -webkit-linear-gradient(315deg, #f2973b 25%, #fef1b4);
  background-clip: text;
  overflow: hidden;
  position: relative;
  -webkit-text-fill-color: transparent;
}

.name::before {
  z-index: -1;
  content: '';
  position: absolute;
  top: 60%;
  right: 0;
  bottom: 10%;
  left: 0;
  background-image: -webkit-linear-gradient(315deg, #b42392 25%, #647eff);
  opacity: 0.5;
  transition: all 0.5s ease;
}

.name:hover::before {
  top: 83%;
  opacity: 1;
}

.left-cell {
  @apply text-right align-top;
  border-right-width: 10px;
  border-color: rgba(0, 0, 0, 0);
}
</style>
