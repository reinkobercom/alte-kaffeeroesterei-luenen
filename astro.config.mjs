// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.alte-kaffee-roesterei.de',
  trailingSlash: 'never',
  build: {
    // erzeugt /ueber-uns.html statt /ueber-uns/index.html -> URLs ohne Slash wie bei Onepage
    format: 'file',
  },
  image: {
    responsiveStyles: true,
  },
});
