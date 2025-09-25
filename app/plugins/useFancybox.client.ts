import { Fancybox } from "@fancyapps/ui";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide("Fancybox", Fancybox);
    Fancybox.bind("[data-fancybox]", {
        hideScrollbar: false,
        wheel: "zoom",
        Carousel: {
            transition: "slide",
        }
    });
});