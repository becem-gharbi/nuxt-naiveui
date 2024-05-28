import { expect, type Page } from '@playwright/test'

export async function toggleToLight(page: Page) {
  await page.getByTestId('color-mode-select').click()
  await page.locator('div').filter({ hasText: /^Light$/ }).first().click()
}

export async function toggleToDark(page: Page) {
  await page.getByTestId('color-mode-select').click()
  await page.locator('div').filter({ hasText: /^Dark$/ }).first().click()
}

export async function goto(page: Page, path: string) {
  await page.goto(path)
  await expect(page.getByTestId('hydration-check')).toBeAttached()
}
