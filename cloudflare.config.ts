import { defineConfig } from "cf/config";

export default defineConfig({
  accountId: "5b22356dc63b107eeb206cd3b166437b",
  worker: {
    "name": "alphakouanda-portfolio",
    "compatibilityDate": "2026-10-21",
    "observability": {
      "enabled": true,
      "traces": { "enabled": true }
    }
  }
});
