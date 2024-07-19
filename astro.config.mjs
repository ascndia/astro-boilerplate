import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  //   site: "https://withastro.com",
  //   base: "/boilerplate",
});
