import { defineConfig } from 'astro/config';

export default defineConfig({
    site: "https://jbloca.github.io/Landing-CentroMedico/",
    base: "/Landing-CentroMedico/", // Ruta base para GitHub Pages
    output: 'static',
    build: {
      outDir: './dist',
    },
  });
  
