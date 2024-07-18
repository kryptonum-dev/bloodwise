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
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      domains: [],
      formats: ['image/avif', 'image/webp'],
      dangerouslyAllowSVG: true,
      remotePatterns: [{
        protocol: "https",
        hostname: "cdn.sanity.io"
      }],
    }
  })
});
