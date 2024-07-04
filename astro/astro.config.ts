import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import { DOMAIN } from "./src/global/constants";
import { isPreviewDeployment } from "./src/utils/is-preview-deployment";

export default defineConfig({
  site: DOMAIN,
  integrations: [sitemap(), react()],
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  output: "server",
  adapter: vercel({
    ...(!isPreviewDeployment && {
      isr: {
        bypassToken: import.meta.env.ISR_BYPASS_TOKEN,
      },
    }),
  }),
});
