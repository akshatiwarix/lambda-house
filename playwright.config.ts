import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3000";
const isLocal = baseURL.includes("127.0.0.1") || baseURL.includes("localhost");

/**
 * Isolated test fixtures. These are never used for a real deployment; the
 * production URLs live only in .env.local and Vercel project settings.
 */
const testEnv = {
  NEXT_PUBLIC_JOIN_FORM_URL: "https://forms.google.com/join-test",
  NEXT_PUBLIC_RSVP_FORM_URL: "https://lu.ma/rsvp-test",
  NEXT_PUBLIC_SOCIAL_URL: "https://www.instagram.com/thelambdahouse",
  NEXT_PUBLIC_SITE_URL: "http://127.0.0.1:3000",
};

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: isLocal
    ? {
        command: "npm run build && npm run start -- --port 3000",
        url: "http://127.0.0.1:3000",
        reuseExistingServer: !process.env.CI,
        timeout: 180_000,
        env: testEnv,
      }
    : undefined,
});
