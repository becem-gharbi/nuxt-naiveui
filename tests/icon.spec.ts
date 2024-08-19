import { test, expect } from '@playwright/test'
import { goto } from './utils'

test('should load icon', async ({ page }) => {
  await goto(page, '/icon')
  await expect(page.locator('svg')).toBeVisible()
})

test('should update icon', async ({ page }) => {
  await goto(page, '/icon')
  await page.getByTestId('icon-name-toggle').click()
  await page.waitForTimeout(1000)
  await expect(page.locator('svg')).toBeVisible()
})
