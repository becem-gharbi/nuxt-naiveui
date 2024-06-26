import type { Plugin } from 'vite'
import { download, getSavedIcons, makeDir, removeSavedIcons, save } from './utils'

const COLLECTIONS_URL = 'https://raw.githubusercontent.com/iconify/icon-sets/master/collections.json'

export default function (path: string, collectionsUrl = COLLECTIONS_URL): Plugin | undefined {
  if (process.env.NODE_ENV === 'development') {
    return
  }

  // A regex to extract icon names from code. The match should:
  // Start and ends with " or ' or `
  // In format prefix:name
  // Should follow Iconify conventions
  // https://iconify.design/docs/icons/icon-basics.html#icon-names

  let regex: RegExp

  const icons = new Set<string>()

  makeDir(path)

  return {
    name: 'iconify-download-icons',

    async buildStart() {
      if (regex) {
        return
      }

      const fetchError = new Error(`❌ 󠀠 [nuxt-naiveui] failed to fetch collections from ${collectionsUrl}`)

      const collections = await fetch(collectionsUrl)
        .then((r) => {
          if (r.ok) {
            return r.json()
          }
          throw fetchError
        })
        .catch(() => {
          throw fetchError
        })

      const prefixes = Object.keys(collections)
      regex = new RegExp(`("|'|\`)(${prefixes.join('|')}):[a-z0-9]+(?:-[a-z0-9]+)*("|'|\`)`, 'g')
    },

    transform(code) {
      code.match(regex)?.forEach(m => icons.add(m.replace(/['"`]/g, '')))
      return { code, map: null }
    },

    async buildEnd() {
      const savedIcons = getSavedIcons(path)

      const unusedIcons = savedIcons.filter(i => !icons.has(i))

      removeSavedIcons(unusedIcons, path)

      const missingIcons = new Set<string>()

      icons.forEach(i => savedIcons.includes(i) || missingIcons.add(i))

      if (missingIcons.size) {
        await download([...missingIcons.values()]).then(d => save(d, path))
      }

      console.log(`✔️ 󠀠 [nuxt-naiveui] download ${missingIcons.size} new icons and remove ${unusedIcons.length} unused icons`)
    },
  }
}
