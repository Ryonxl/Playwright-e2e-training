import { test, expect } from "@playwright/test";

test("deve cadastrar um usuario e fazer login com sucesso", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByTestId("tab-register").click();
  await page.getByTestId("reg-email").fill("");
  await page.getByTestId("reg-password").fill("");
  await page.getByTestId("reg-confirm").fill("");
  await page.getByTestId("btn-register").click();

  await page.getByTestId("tab-login").click();
  await page.getByTestId("login-email").fill("");
  await page.getByTestId("login-password").fill("");
  await page.getByTestId("btn-login").click();

  await expect(page.getByTestId("dashboard")).toBeVisible();
  await expect(page.getByTestId("dash-email")).toContainText("");
});
