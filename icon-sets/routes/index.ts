export default eventHandler(async (event) => {
  const collectionsUrl = 'https://raw.githubusercontent.com/iconify/icon-sets/master/collections.json'

  const fetchError = createError('failed to fetch collections')

  return await fetch(collectionsUrl)
    .then(async (res) => {
      if (res.ok) {
        const data = await res.json()
        Object.keys(data).forEach((key) => { data[key] = true })
        setResponseHeader(event, 'Content-Type', 'application/json')
        return data
      }
      throw fetchError
    })
    .catch(() => {
      throw fetchError
    })
})
