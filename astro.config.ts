import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import UnoCSS from 'unocss/astro'
import vue from '@astrojs/vue'
// import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://zzysty.vercel.app/',
  server: {
    port: 1977,
  },
  integrations: [mdx(), sitemap(), UnoCSS({
    injectReset: true,
  }), vue()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
      },
      wrap: true,
    },
  },
  // output: 'server',
  // adapter: vercel(),
})
