import * as path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa'

const manifest: Partial<ManifestOptions> = {
  theme_color: '#d3ced9',
  background_color: '#5fe386',
  icons: [
    { purpose: 'maskable', sizes: '512x512', src: 'icon512_maskable.png', type: 'image/png' },
    { purpose: 'any', sizes: '512x512', src: 'icon512_rounded.png', type: 'image/png' },
  ],
  screenshots: [
    {
      src: '/screenshots/desktop.png',
      type: 'image/png',
      sizes: '1144x773',
      form_factor: 'wide',
    },
    {
      src: '/screenshots/mobile.png',
      type: 'image/png',
      sizes: '342x707',
      form_factor: 'narrow',
    },
  ],
  orientation: 'any',
  display: 'standalone',
  lang: 'en-GB',
  name: 'test-name',
  short_name: 'test-short-name',
  start_url: 'https://sfera-alpha.vercel.app/main',
}

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: { globPatterns: ['**/*.{js,css,html,ico,png,svg}'] },
      manifest: manifest,
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    rollupOptions: {
      external: ['workbox-window'],
    },
  },
})
