import { defineConfig } from 'astro/config';

import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://zerolimits.dev",
  integrations: [sitemap(), compress()]
});
