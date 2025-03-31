import { defineConfig } from 'astro/config';

export default defineConfig({
  site: "https://Jbloca.github.io/Landing-CentroMedico/", // URL de GitHub Pages
  base: "/Landing-CentroMedico/", // Debe incluir la barra inicial y final

  output: 'static', // Genera una página estática compatible con GitHub Pages
  build: {
    outDir: './dist', // Directorio donde se generan los archivos
  },
});
