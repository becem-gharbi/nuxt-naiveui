import fs from 'fs'
import path from 'path'
import { loadIcons, getIcon } from '@iconify/vue'
import type { IconifyJSON, IconifyIcon, IconifyIconName } from '@iconify/vue'

const download = (icons: string[]) => new Promise<IconifyJSON[]>((resolve, reject) => {
  loadIcons(icons, (loaded, missing, pending) => {
    if (pending.length) { return }

    const fullname = (e: IconifyIconName) => `${e.prefix}:${e.name}`

    if (missing.length) {
      const error = new Error(`❌ 󠀠 [iconify-download-icons] download failed of ${missing.map(fullname).join(' ')}`)
      reject(error)
    }

    const output = loaded.map(i => ({
      prefix: i.prefix,
      icons: {
        [i.name]: getIcon(fullname(i)) as IconifyIcon
      }
    }))

    resolve(output)
  })
})

const makeDir = (path: string) => {
  const exists = fs.existsSync(path)
  if (!exists) {
    fs.mkdirSync(path)
  }
}

const makeFile = (path: string, content: string) => {
  const exists = fs.existsSync(path)
  if (!exists) {
    fs.writeFileSync(path, content)
  }
}

const save = (iconsJSON: IconifyJSON[], iconsDir: string) => {
  iconsJSON.forEach((i) => {
    const prefix = i.prefix
    const name = Object.keys(i.icons)[0]
    const dirPath = path.resolve(iconsDir, prefix)
    const filePath = path.resolve(dirPath, `${name}.json`)
    makeDir(dirPath)
    makeFile(filePath, JSON.stringify(i))
  })
}

const removeSavedIcons = (icons: string[], iconsDir: string) => {
  icons.forEach((icon) => {
    const [prefix, name] = icon.split(':')
    const dirPath = path.resolve(iconsDir, prefix)
    const filePath = path.resolve(dirPath, `${name}.json`)
    fs.rmSync(filePath)
    if (fs.readdirSync(dirPath).length === 0) {
      fs.rmdirSync(dirPath)
    }
  })
}

const getSavedIcons = (iconsDir: string) => {
  return fs.readdirSync(iconsDir, { recursive: true })
    .map(p => path.parse(p.toString()))
    .filter(p => p.dir)
    .map(p => `${p.dir}:${p.name}`)
}

export { download, save, makeDir, removeSavedIcons, getSavedIcons }
