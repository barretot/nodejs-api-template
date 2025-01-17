import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'build',
  format: ['esm'],
  target: 'node22',
  sourcemap: true, 
  clean: true, 
  splitting: false, 
  bundle: true, 
})
