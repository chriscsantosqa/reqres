import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: [
    ["list"],
    [
      "allure-playwright",
      { outputFolder: "allure-results", detail: true, suiteTitle: false },
    ],
  ],
  use: {
    baseURL: "https://reqres.in",
    extraHTTPHeaders: {
      "x-api-key": "reqres-free-v1",
    },
  },
});
