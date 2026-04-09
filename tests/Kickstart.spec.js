import { test, expect } from "@playwright/test";

test("First program", async ({ page }) => {
  await page.goto("https://automationexercise.com/#google_vignette");
  await page
    .locator("//a[@href='/products']", { has: page.locator(".card_travel") })
    .click();

  await expect(page.locator("//a[@href='/products']")).toHaveCount(1);
  await expect(page.locator("//a[@href='/products']")).toBeVisible();
  await expect(page.locator("//a[@href='/products']")).toBeEnabled();

  await page.locator("//a[@href='/products']").click({ button: "right" });

  await page.locator("//a[@href='/products']").dblclick();

  const [newpage] = await promise.all([
    context.waitForEvent("page"),
    page.click(),
  ]);
  await newpage.locator();
  const [download] = await promise.all([
    page.waitForEvent("download"),
    page.click(),
  ]);
  await download.savaAs();
});
