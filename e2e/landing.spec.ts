import { expect, test } from "@playwright/test";

const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/El6ybbYnyhL90MMudkbV1G";

test("visitor understands the community and can join it", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Lambda House Kanpur/);
  await expect(
    page.getByRole("heading", { name: "Bringing people together to talk tech" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Join Lambda House" }).first(),
  ).toHaveAttribute("href", WHATSAPP_COMMUNITY_URL);
});

test("the event banner links to the open RSVP", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: /RSVP on Luma/ }),
  ).toHaveAttribute("href", "https://lu.ma/rsvp-test");
});

test("policy pages are reachable", async ({ page }) => {
  await page.goto("/conduct");
  await expect(
    page.getByRole("heading", { name: /conduct and safety/i }),
  ).toBeVisible();
  await page.goto("/privacy");
  await expect(page.getByRole("heading", { name: /privacy/i })).toBeVisible();
});

test("the whatsapp community link is the exact approved one, everywhere it appears", async ({
  page,
}) => {
  // Publishing this link is a deliberate, confirmed choice (a Community
  // link, not a bare group invite) - this test guards against a typo or
  // link rot rather than forbidding it outright.
  for (const path of ["/", "/conduct", "/privacy"]) {
    await page.goto(path);
    const html = await page.content();
    const matches = html.match(/chat\.whatsapp\.com\/[A-Za-z0-9]+/g) ?? [];
    for (const match of matches) {
      expect(`https://${match}`).toBe(WHATSAPP_COMMUNITY_URL);
    }
  }
});

test("the page does not scroll sideways on a small screen", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/");
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(overflow).toBe(false);
});
