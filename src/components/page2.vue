<script setup>
import scrollReval from "scrollreveal";
import { onMounted,ref } from "vue";

const subSites = ref([
  {
    "title": "bangdream.moe シリーズサイト",
    "url": "https://bangdream.moe",
  },
  {
    "title": "分散型 SNS インスタンス nightcord.de",
    "url": "https://nightcord.de",
  },
  {
    "title": "pwq.app Url 短縮サービス",
    "url": "https://pwq.app",
  },
  {
    "title":"チュウニズム中国版 支援サイト",
    "url":"https://chu.3kn.jp",
  }
  //{
  //  "title": "",
  //  "url": "",
  //}
])

const myContacts = ref([
  {
    "title": "mikan.ac.cn",
    "url": "https://mikan.ac.cn",
  },
  {
    "title": "Blog",
    "url": "https://log.3kn.jp"
  },
  {
    "title": "Twitter",
    "url": "https://twitter.com/9_bishi",
  },
  {
    "title": "GitHub",
    "url": "https://github.com/mitian233",
  }
])

onMounted(() => {
  scrollReval().reveal(".page2reval", {
    delay: 300,
    duration: 1000,
    distance: "50px",
    origin: "bottom",
    reset: true,
  });
});

</script>

<template>
<div id="page2" class="max-w-screen md:p-16 p-10 flex flex-row flex-wrap">
  <div class="md:w-1/2 w-full">
    <div class="flex page2reval">
      <h1 class="text-5xl bg-black text-white py-1 px-2">Sub Sites</h1>
    </div>
    <div>
      <ul class="py-5">
        <li v-for="subSite in subSites" class="page2reval my-1">
          <a :href="subSite.url" class="text-2xl link-for-page2 flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short shrink-0" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
            {{subSite.title}}
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="md:w-1/2 w-full">
    <div class="flex page2reval">
      <h1 class="text-5xl bg-black text-white py-1 px-2">Contacts</h1>
    </div>
    <div>
      <ul class="py-5">
        <li v-for="contact in myContacts" class="page2reval my-1">
          <a :href="contact.url" class="text-2xl link-for-page2 flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short shrink-0" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
            {{contact.title}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<style scoped>
.link-for-page2{
  @apply hover:text-white hover:bg-black duration-100;
}
</style>
