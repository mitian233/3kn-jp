<script setup lang="ts">
import siteConfig from "~/site.config"
import {gsap} from "gsap"
import {TextPlugin} from "gsap/TextPlugin"

gsap.registerPlugin(TextPlugin)
const linksDiv = ref<HTMLDivElement | null>(null);

useHead({
  title: 'Welcome - ' + siteConfig.title,
  meta: [
    {name: 'theme-color', content: '#000000'},
    {name: 'apple-mobile-web-app-capable', content: 'yes'},
    {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},
    {name: 'og:title', content: 'Welcome - ' + siteConfig.title},
    {name: 'og:description', content: 'Mikan\'s Homepage'},
    {name: 'og:image', content: 'https://3kn.jp/ogp.png'},
    {name: 'og:url', content: 'https://3kn.jp/'},
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:title', content: '3kn.jp'},
    {name: 'twitter:description', content: 'Mikan\'s Homepage'},
    {name: 'twitter:image', content: 'https://3kn.jp/ogp.png'},
    {name: 'twitter:url', content: 'https://3kn.jp/'}
  ]
})
onMounted(() => {
  const cursor = gsap.to(".type-cursor", {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1,
  })
  const text = gsap.timeline({autoRemoveChildren: false, repeat: -1});
  text.add(gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1}).to('.type-text', {
    duration: 1.5,
    text: 'Front-end Developer',
    repeat: 0,
    repeatDelay: 1,
    ease: 'none'
  }), '0')
  text.add(gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1}).to('.type-text', {
    duration: 1.3,
    text: 'Web Developer',
    repeat: 0,
    repeatDelay: 1,
    ease: 'none'
  }), '+=0')
  text.add(gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1}).to('.type-text', {
    duration: 0.7,
    text: 'Student',
    repeat: 0,
    repeatDelay: 1,
    ease: 'none'
  }), '+=0')
  const linkTl = gsap.timeline()
  if (linksDiv.value) {
    for (let i = 0; i < linksDiv.value.children.length; i++) {
      const childId = linksDiv.value.children[i].id
      if(i===0){
        linkTl.from("#" + childId, {y: 100, duration: 1, ease: 'power2.inOut'}, '+=0')
        linkTl.to('#' + childId, {duration: 1, opacity: 1, ease: 'power2.inOut'}, '-=1')
      } else {
        linkTl.from("#" + childId, {y: 100, duration: 1, ease: 'power2.inOut'}, '-=0.9')
        linkTl.to('#' + childId, {duration: 1, opacity: 1, ease: 'power2.inOut'}, '-=1')
      }
    }
  }
  const tl = gsap.timeline()
  // tl.from('.type-wrapper', {y: 100, duration: 1, ease: 'power2.inOut'}, '+=0')
  // tl.to('.type-wrapper', {duration: 1, opacity: 1, ease: 'power2.inOut'}, '-=1')
  tl.to('.type-wrapper', {duration: 1, opacity: 1, ease: 'power2.inOut'}, '+=0')
  tl.add(linkTl, '-=0.2')
  tl.from('.about-table', {y: 100, duration: 1, ease: 'power2.inOut'}, '-=1.1')
  tl.to('.about-table', {duration: 1, opacity: 1, ease: 'power2.inOut'}, '-=1')
  tl.add(text, '1')
  tl.add(cursor, '1')
})
</script>

<template>
  <div class="first-screen overflow-hidden">
    <div class="flex flex-col md:flex-row md:justify-between">
      <div>
        <h1 class="text-4xl md:text-6xl font-bold hero-text">Hi</h1>
        <h2 class="text-4xl md:text-6xl font-bold hero-text">I'm <span class="name">Mikan</span></h2>
        <div class="type-wrapper" style="opacity: 0;">
          <span class="type-text-front">A </span>
          <span class="type-text"></span>
          <div class="type-cursor"></div>
        </div>
      </div>
      <div class="flex flex-wrap flex-row gap-3 md:gap-0 md:flex-col md:pr-5" ref="linksDiv">
        <div id="blog" class="hero-link"><a href="https://blog.bangdream.moe" class="super-link">Blog</a></div>
        <div id="github" class="hero-link"><a href="https://github.com/mitian233" class="super-link">GitHub</a></div>
        <div id="x" class="hero-link"><a href="https://x.com/mikan_chn" class="super-link">X/Twitter</a></div>
      </div>
    </div>
    <div class="pt-5 pb-24 md:px-5 md:col-span-3 md:text-lg about-table" style="opacity: 0">
      <table class="w-full border-separate">
        <tbody>
        <tr>
          <td class="left-cell">I am&nbsp;</td>
          <td class="md:text-justify">
            <p>
              Active contributor of Astro theme
              <a href="https://github.com/mitian233/astro-theme-akiba" class="super-link">Akiba</a>,
              Diving-fish's
              <a href="https://github.com/Diving-Fish/maimaidx-prober" class="super-link">maimaidx prober</a>
              contributor and active member of <a href="https://astro.build/" class="super-link">Astro</a> community.
              I love developing useful tools :)
            </p>
            <p></p>
          </td>
        </tr>
        <tr>
          <td class="left-cell min-w-[4em]">About&nbsp;</td>
          <td class="md:text-justify">
            <p>
              Third-rate University student. Who's coding skills is all self-taught. Excel at transforming design
              concepts into responsive web applications. With a meticulous eye for detail and a dedication to clean
              code, can actively contribute to open-source projects, pushing the boundaries of web development.
              Advocating for accessibility and usability, who strive to create inclusive digital experiences. Committed
              to collaboration, who stay updated on emerging technologies, continually enhancing whose skills to make
              meaningful contributions to the dynamic field of front-end development.
            </p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
@keyframes show-text {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.hero-text {
  animation: show-text 1s ease-in-out forwards;
}

.first-screen {
  @apply w-full min-h-[100svh] text-white flex flex-col pt-[40vh] px-[10vw] md:px-[20vw];
  @apply bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))];
  /*background: url('/bg-path.svg');*/
}

.name {
  z-index: 0;
  background-image: -webkit-linear-gradient(315deg, #f2973b 25%, #fef1b4);
  background-clip: text;
  position: relative;
  -webkit-text-fill-color: transparent;
}

@keyframes ani-show {
  0% {
    opacity: 0;
    width: 0;
  }
  100% {
    opacity: 1;
    width: 100%;
  }
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
  animation: ani-show 1s ease-in-out forwards;
}

.name:hover::before {
  top: 83%;
  opacity: 1;
}

.type-wrapper {
  font-weight: 300;
  margin: 0;
  padding: 10px 0;
}

.type-cursor {
  background-color: white;
  width: 0.1em;
  height: 1.7em;
  display: inline-block;
  margin: 0em 0em -0.3em 0em;
}

.type-text-front {
  height: 1.5em;
  font-size: 1.5em;
  position: relative;
}

.type-text {
  height: 1.5em;
  font-size: 1.5em;
  position: relative;
  margin-right: 0.2em;
}

@media (min-width: 768px) {
  .type-text-front {
    font-size: 2em;
  }

  .type-text {
    font-size: 2em;
  }

  .type-cursor {
    height: 2em;
  }
}

.left-cell {
  @apply text-right align-top;
  border-right-width: 10px;
  border-color: rgba(0, 0, 0, 0);
}
.hero-link{
  opacity: 0;
}
</style>
