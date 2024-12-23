import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ImportMetaEnvPlugin from "@import-meta-env/unplugin";


export default defineConfig({
 base: "/",
 //plugins: [react(),],
 plugins: [react(),ImportMetaEnvPlugin.vite({ example:".env.example",transformMode: "runtime"})],
 preview: {
  port: 8080,
  strictPort: true,
 },
 server: {
  port: 8080,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:8080",
 },
});