import { eventHandler, createError } from 'h3'

export default eventHandler(async () => {
  const collectionsUrl = 'https://raw.githubusercontent.com/iconify/icon-sets/master/collections.json'

  const fetchError = createError('failed to fetch collections')

  return await fetch(collectionsUrl)
    .then(async (res) => {
      if (res.ok) {
        const data = await res.json()
        Object.keys(data).forEach((key) => { data[key] = true })
        return data
      }
      throw fetchError
    })
    .catch(() => {
      throw fetchError
    })
})
