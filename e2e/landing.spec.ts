import { expect, test } from "@playwright/test";

test("visitor understands and reaches both forms", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Lambda House Kanpur/);
  await expect(
    page.getByRole("heading", { name: "Kanpur, come talk tech with us." }),
  ).toBeVisible();
  await expect(page.getByText("Sun 06 Sep 2026", { exact: false })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Attend the first meetup" }).first(),
  ).toHaveAttribute("href", "https://lu.ma/rsvp-test");
  await expect(
    page.getByRole("link", { name: "Join Lambda House" }).first(),
  ).toHaveAttribute("href", "https://forms.google.com/join-test");
});

test("policy pages are reachable", async ({ page }) => {
  await page.goto("/conduct");
  await expect(
    page.getByRole("heading", { name: /conduct and safety/i }),
  ).toBeVisible();
  await page.goto("/privacy");
  await expect(page.getByRole("heading", { name: /privacy/i })).toBeVisible();
});

test("the whatsapp invite is never published", async ({ page }) => {
  for (const path of ["/", "/conduct", "/privacy"]) {
    await page.goto(path);
    const html = await page.content();
    expect(html).not.toContain("chat.whatsapp.com");
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
