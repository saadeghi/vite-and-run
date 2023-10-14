# vite-and-run

`npx vite-and-run "your_command"` starts a Vite server and runs a custom command when files are changed and triggers a hot reload.

## What is it?

It's just a wrapper around [Vite](https://vitejs.dev/) + [vite-plugin-watch-and-run](https://www.npmjs.com/package/vite-plugin-watch-and-run) together.  
But it's easier to use a single `npx` command than to install and configure everything.

## How to use

### Example 1

```
npx vite-and-run "echo Hello"
```

- Starts a Vite server in current directory
- Runs `echo Hello` command when any file in current directory is changed.
- Triggers a hot reload in the browser.

### Example 2

```
npx vite-and-run "tailwindcss -o output.css" "index.html"
```

- Starts a Vite server in current directory
- Runs `tailwindcss -o output.css` command when `index.html` is changed.
- Triggers a hot reload in the browser.

### Example 3

```
npx vite-and-run "node start.js" "src/*.jpg" 1000
```

- Starts a Vite server in current directory
- Runs `node start.js` command when `src/*.jpg` files are changed with a `1000` milliseconds delay. Delay is useful when you make changes to multiple files at once and you want to prevent multiple executions of the command.
- Triggers a hot reload in the browser.
