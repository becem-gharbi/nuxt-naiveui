import { test, expect } from '@playwright/test'
import { goto, toggleToDark, toggleToLight } from './utils'

test('should update state', async ({ browser }) => {
  const context = await browser.newContext()
  const page = await context.newPage()
  await goto(page, '/color-mode')

  await toggleToDark(page)
  await expect(page.getByTestId('color-mode-value')).toHaveText('dark')

  let storage = await context.storageState()
  let bgLocalStorage = storage.origins[0].localStorage.find(e => e.name === 'naive-body-bg-color')
  let bgCookie = storage.cookies.find(e => e.name === 'naive_color_mode_preference')
  expect(bgCookie?.value).toBe('dark')
  expect(bgLocalStorage?.value).toBe('rgb(16, 16, 20)')

  await toggleToLight(page)
  await expect(page.getByTestId('color-mode-value')).toHaveText('light')

  storage = await context.storageState()
  bgLocalStorage = storage.origins[0].localStorage.find(e => e.name === 'naive-body-bg-color')
  bgCookie = storage.cookies.find(e => e.name === 'naive_color_mode_preference')
  expect(bgCookie?.value).toBe('light')
  expect(bgLocalStorage?.value).toBe('white')

  await context.close()
})

test('should respect forced mode', async ({ page }) => {
  await goto(page, '/color-mode/forced')

  await expect(page.getByTestId('color-mode-forced')).toHaveText('dark')
  await page.getByRole('link', { name: 'Go to not forced' }).click()
  await expect(page.getByTestId('color-mode-forced')).toHaveText('false')
  await page.getByRole('link', { name: 'Go to forced' }).click()
  await expect(page.getByTestId('color-mode-forced')).toHaveText('dark')
})

test('should update theme', async ({ page }) => {
  await goto(page, '/color-mode')

  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(page.locator('html')).toHaveAttribute('class', '')
  await expect(page.getByRole('button', { name: 'Button' })).toHaveCSS('background-color', 'rgb(29, 78, 216)')

  await toggleToDark(page)
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(16, 16, 20)')
  await expect(page.locator('html')).toHaveAttribute('class', 'dark')
  await expect(page.getByRole('button', { name: 'Button' })).toHaveCSS('background-color', 'rgb(96, 165, 250)')

  await toggleToLight(page)
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(page.locator('html')).toHaveAttribute('class', '')
  await expect(page.getByRole('button', { name: 'Button' })).toHaveCSS('background-color', 'rgb(29, 78, 216)')
})
