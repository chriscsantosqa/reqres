import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "https://reqres.in",
    extraHTTPHeaders: {
      "x-api-key": "reqres-free-v1", // Adicionando a chave API globalmente
    },
  },
});
