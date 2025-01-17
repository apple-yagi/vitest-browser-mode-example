import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "vite.config.ts",
    test: {
      name: "browser",
      include: ["src/**/*.browser.test.tsx"],
      browser: {
        enabled: true,
        name: "chromium",
        provider: "playwright",
        // https://playwright.dev
        providerOptions: {},
      },
    },
  },
  {
    extends: "vite.config.ts",
    test: {
      name: "jsdom",
      include: ["src/**/*.jsdom.test.tsx"],
      environment: "jsdom",
      setupFiles: ["./setupTest.ts"],
    },
  },
]);
