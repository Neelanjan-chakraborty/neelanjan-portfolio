import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import netlify from '@astrojs/netlify/edge-functions';
import netlify from "@astrojs/netlify/functions";



// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: netlify({
    edgeMiddleware: true
  }),
  output: 'server'
});