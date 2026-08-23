import { expect, test } from "@playwright/test";

/**
 * Guards the motion added for the two reviews: press feedback, the FAQ
 * disclosure, and the badge halo. The reduced-motion cases matter most - the
 * point of that block is that motion gets gentler, not that content vanishes.
 */

test("a question expands over time instead of appearing in one frame", async ({
  page,
}) => {
  await page.goto("/");
  const item = page.locator(".faq__item").first();

  const heights = await item.evaluate(
    (el) =>
      new Promise<number[]>((resolve) => {
        const read = () =>
          parseFloat(getComputedStyle(el, "::details-content").blockSize);
        const samples: number[] = [];
        (el as HTMLDetailsElement).open = true;
        const start = performance.now();
        const tick = () => {
          samples.push(read());
          if (performance.now() - start < 200) requestAnimationFrame(tick);
          else resolve(samples);
        };
        requestAnimationFrame(tick);
      }),
  );

  // Mid-flight heights prove a transition rather than a jump to full height.
  const settled = heights[heights.length - 1];
  expect(settled).toBeGreaterThan(0);
  expect(heights.some((h) => h > 0 && h < settled)).toBe(true);
});

test("pressable elements acknowledge the press itself", async ({ page }) => {
  await page.goto("/");
  for (const selector of [".btn", ".meetup-badge"]) {
    const properties = await page
      .locator(selector)
      .evaluate((el) => getComputedStyle(el).transitionProperty);
    expect(properties).toContain("transform");
  }
});

test("the badge halo animates on the compositor, not on paint", async ({
  page,
}) => {
  await page.goto("/");
  const halo = await page
    .locator(".meetup-badge__pulse")
    .evaluate((el) => {
      const style = getComputedStyle(el, "::after");
      return { name: style.animationName, shadow: style.boxShadow };
    });
  expect(halo.name).toBe("event-pulse");
  expect(halo.shadow).toBe("none");
});

test.describe("reduced motion", () => {
  test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
  });

  // Without this the three cases below would pass for the wrong reason.
  test("is actually being emulated", async ({ page }) => {
    await page.goto("/");
    const reduced = await page.evaluate(
      () => matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
    expect(reduced).toBe(true);
  });

  test("never hides an audience cell behind a scroll animation", async ({
    page,
  }) => {
    await page.goto("/");
    const opacities = await page
      .locator(".audience-grid li")
      .evaluateAll((els) => els.map((el) => getComputedStyle(el).opacity));
    expect(opacities.every((value) => value === "1")).toBe(true);
  });

  test("cross-fades the FAQ answer instead of moving it", async ({ page }) => {
    await page.goto("/");
    const item = page.locator(".faq__item").first();
    const properties = await item.evaluate(
      (el) => getComputedStyle(el, "::details-content").transitionProperty,
    );
    expect(properties).toBe("opacity, content-visibility");

    await item.locator(".faq__q").click();
    await expect(item.locator(".faq__a")).toBeVisible();
  });

  test("stops the badge halo looping", async ({ page }) => {
    await page.goto("/");
    const count = await page
      .locator(".meetup-badge__pulse")
      .evaluate((el) => getComputedStyle(el, "::after").animationIterationCount);
    expect(count).toBe("1");
  });
});
