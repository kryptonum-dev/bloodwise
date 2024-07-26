import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { DOMAIN } from "./src/global/constants";
import { isPreviewDeployment } from "./src/utils/is-preview-deployment";

export default defineConfig({
  site: DOMAIN,
  integrations: [
    sitemap(),
    icon()
  ],
  image: {
    remotePatterns: [{
      protocol: "https",
      hostname: "cdn.sanity.io"
    }],
  },
  experimental: {
    actions: true,
  },
  prefetch: {
    prefetchAll: true
  },
  output: isPreviewDeployment ? "server" : 'hybrid',
  adapter: vercel(),
});
