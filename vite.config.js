import { env } from 'node:process';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [],
  css: {
    devSourcemap: true
  },
  publicDir: 'public',
  root: './source',
  build: {
    outDir: '../dist',
  },
  base: !env.CI ? '/' : `/${env.REPO_NAME}/`,
  server: {
    port: 3000,
  }
};
