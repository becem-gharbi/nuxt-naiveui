import { test, expect } from '@playwright/test'
import { goto } from './utils'

test('NaiveLayoutNavbar should work', async ({ page }) => {
  await goto(page, '/navigation?layout=layout-navbar')
  await expect(page.getByTestId('layout-navbar')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Page 1' })).toBeVisible()
  await page.getByRole('link', { name: 'Page 2' }).click()
  await expect(page.getByRole('heading', { name: 'Page 2' })).toBeVisible()
  await page.setViewportSize({ width: 480, height: 700 })
  await expect(page.getByLabel('drawer-toggle-btn')).toBeVisible()
})

test('NaiveLayoutSidebar should work', async ({ page }) => {
  await goto(page, '/navigation?layout=layout-sidebar')
  await expect(page.getByTestId('layout-sidebar')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Page 1' })).toBeVisible()
  await page.getByRole('link', { name: 'Page 2' }).click()
  await expect(page.getByRole('heading', { name: 'Page 2' })).toBeVisible()
  await page.setViewportSize({ width: 480, height: 700 })
  await expect(page.getByLabel('drawer-toggle-btn')).toBeVisible()
})

test('NaiveNavbar should work', async ({ page }) => {
  await goto(page, '/navigation?layout=navbar')
  await expect(page.locator('nav')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Page 1' })).toBeVisible()
  await page.getByRole('link', { name: 'Page 2' }).click()
  await expect(page.getByRole('heading', { name: 'Page 2' })).toBeVisible()
  await page.setViewportSize({ width: 480, height: 700 })
  await expect(page.getByLabel('drawer-toggle-btn')).toBeVisible()
})

test('NaiveTabbar should work', async ({ page }) => {
  await page.setViewportSize({ width: 480, height: 700 })
  await goto(page, '/navigation?layout=tabbar')
  await expect(page.getByTestId('tabbar')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Page 1' })).toBeVisible()
  await page.locator('button').filter({ hasText: 'Page 2' }).click()
  await expect(page.getByRole('heading', { name: 'Page 2' })).toBeVisible()
})
