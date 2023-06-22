import { defineConfig, loadEnv } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // eslint-disable-line
  return defineConfig({
    plugins: [react()],
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    resolve: {
      alias: {
        "@/": path.resolve(__dirname, "src/*"), // eslint-disable-line
      },
    },
    esbuild: {
      loader: "jsx",
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          ".js": "jsx",
        },
      },
    },
  });
};
