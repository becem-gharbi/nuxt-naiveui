import { test, expect } from '@playwright/test'
import { goto } from './utils'

test('should start and stop loading bar', async ({ page }) => {
  await goto(page, '/feedback')
  await page.getByRole('button', { name: 'Start loading bar' }).click()
  await expect(page.locator('.n-loading-bar-container')).toBeVisible()
  await page.getByRole('button', { name: 'stop loading bar' }).click()
  await expect(page.locator('.n-loading-bar-container')).toBeHidden()
})

test('should create notification', async ({ page }) => {
  await goto(page, '/feedback')
  await page.getByRole('button', { name: 'Show notification' }).click()
  await expect(page.locator('.n-notification')).toBeVisible()
})
