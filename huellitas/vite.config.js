import { defineConfig } from 'vite';

export default defineConfig({

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "node_modules/bootstrap/scss/bootstrap.scss";`
      }
    }
  }
});