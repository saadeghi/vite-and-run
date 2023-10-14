import watchAndRun from "vite-plugin-watch-and-run";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    watchAndRun([
      {
        watch: "**/*",
        run: "npm run gen",
      },
    ]),
  ],
};

export default config;
