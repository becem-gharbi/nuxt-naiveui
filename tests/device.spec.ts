import { test, expect } from '@playwright/test'
import { goto } from './utils'

test('should not be mobile nor tablet', async ({ browser }) => {
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
  const page = await browser.newPage({ userAgent })
  await goto(page, '/device')
  expect(page.getByTestId('device-mobile')).toHaveText('false')
  expect(page.getByTestId('device-mobileOrTablet')).toHaveText('false')
})

test('should be mobile', async ({ browser }) => {
  const userAgent = 'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36'
  const page = await browser.newPage({ userAgent })
  await goto(page, '/device')
  expect(page.getByTestId('device-mobile')).toHaveText('true')
  expect(page.getByTestId('device-mobileOrTablet')).toHaveText('true')
})

test('should be tablet', async ({ browser }) => {
  const userAgent = 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
  const page = await browser.newPage({ userAgent })
  await goto(page, '/device')
  expect(page.getByTestId('device-mobile')).toHaveText('false')
  expect(page.getByTestId('device-mobileOrTablet')).toHaveText('true')
})
