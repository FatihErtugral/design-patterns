import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { readdirSync, lstatSync } from 'node:fs';

const pages = resolve(__dirname, 'pages');
const pagePaths = readdirSync(pages)
    .filter((path) => lstatSync(`${pages}/${path}`).isFile())
    .reduce((previous, current) => {
        return {
            ...previous,
            [current.replace('.html', '')]: `${pages}/${current}`
        };
    }, {});

export default defineConfig({
  build: {
    rollupOptions: {
        input: {
            main: resolve(__dirname, 'index.html'),
            ...pagePaths,
        }
    }
  }
});