import { defineConfig, loadEnv } from "vite";
import postcss from "./postcss.config.js";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    server: {
      port: 3000,
      host: true,
    },
    define: {
      "process.env": { ...process.env, ...loadEnv(mode, process.cwd()) },
    },
    css: {
      postcss,
    },
    plugins: [react()],
  });
};
