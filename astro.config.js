import { defineConfig } from 'astro/config';

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";

const { SANITY_API_TOKEN: token } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  server: {
    port: 3333
  },
  integrations: [sanity({
    projectId: 'odh6ii6d',
    dataset: 'production',
    studioBasePath: '/studio',

    perspective: 'previewDrafts',
    token,
    useCdn: false,
  }), react({
    experimentalReactChildren: true
  })],
});