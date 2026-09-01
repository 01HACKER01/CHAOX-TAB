import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/CHAOX-TAB/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html')
      }
    }
  }
})