import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import netlify from "@astrojs/netlify/functions";
import sitemap from '@astrojs/sitemap';




// https://astro.build/config
export default defineConfig({
  site: 'https://neelanjanchakraborty.in',
  integrations: [sitemap(),tailwind()],
  adapter: netlify(),
  output: 'server'
});