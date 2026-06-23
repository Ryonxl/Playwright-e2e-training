import { test, expect } from '@playwright/test';

test('login com sucesso', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/seminario.html');
  await page.fill('#email', 'rian@gmail.com');
  await page.fill('#senha', '12345678');
  await page.click('#btn-login');
  await expect(
    page.locator('#mensagem')
  ).toBeVisible();

});

