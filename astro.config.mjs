import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    // Este es el directorio donde se generarán los archivos estáticos
    outDir: './dist', 
  },
});
