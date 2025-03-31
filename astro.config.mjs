import { defineConfig } from 'astro/config';

export default defineConfig({
  site: "https://jbloca.github.io/Landing-CentroMedico/",
  base: "Landing-CentroMedico",
  output: 'static',
  build: {
    outDir: './dist',
  },
});
