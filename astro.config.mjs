import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

/** @see https://astro.build/config */
export default defineConfig({
  integrations: [tailwind()],
  base: "/dsp-doc",
  site: "http://sw-dashboard.arturia.team",
})
