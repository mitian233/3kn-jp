import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    photograph: defineCollection({
      type: "page",
      source: "photograph/*.md",
      schema: z.object({
        title: z.string(),
        date: z.string(),
        cover: z.string(),
        description: z.string(),
      }),
    }),
  },
});
