import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'OpenUI',
      fileName: 'open-ui'
    },
    rollupOptions: {
      external: ['lit', 'tailwindcss'],
      output: {
        globals: {
          lit: 'lit',
          tailwindcss: 'tailwindcss'
        }
      }
    }
  }
})