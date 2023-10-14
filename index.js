#! /usr/bin/env node

import { createServer } from "vite";
import watchAndRun from "vite-plugin-watch-and-run";

(async () => {
  const vite = await createServer({
    server: {
      open: true,
    },
    plugins: [
      watchAndRun([
        {
          run: process.argv[2] || "echo",
          watch: process.argv[3] ? `**/${process.argv[3]}` : "**/*",
          delay: process.argv[4] || 0,
        },
      ]),
    ],
  });

  await vite.listen();
})();
