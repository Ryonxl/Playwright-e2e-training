import { test, expect } from "@playwright/test";

const user = {
  email: "aluno@testelab.com",
  password: "Senha123",
};

test("deve cadastrar um usuario e fazer login com sucesso", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByTestId("tab-register").click();
  await page.getByTestId("reg-email").fill(user.email);
  await page.getByTestId("reg-password").fill(user.password);
  await page.getByTestId("reg-confirm").fill(user.password);
  await page.getByTestId("btn-register").click();

  await page.getByTestId("tab-login").click();
  await page.getByTestId("login-email").fill(user.email);
  await page.getByTestId("login-password").fill(user.password);
  await page.getByTestId("btn-login").click();

  await expect(page.getByTestId("dashboard")).toBeVisible();
  await expect(page.getByTestId("dash-email")).toContainText(user.email);
});
