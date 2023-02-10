import { defineConfig } from 'astro/config';

import compress from "astro-compress";
import critters from "astro-critters";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://noClaps.github.io",
  base: "/links-template-astro",
  integrations: [sitemap(), critters(), compress()]
});
