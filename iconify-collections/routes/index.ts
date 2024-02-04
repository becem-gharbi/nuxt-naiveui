export default eventHandler(async (event) => {
  const collectionsUrl = 'https://raw.githubusercontent.com/iconify/icon-sets/master/collections.json'
  
  setResponseHeader(event, 'Content-Type', 'application/json')

  return fetch(collectionsUrl)
    .then(res => res.json())
    .then((data) => {
      Object.keys(data).forEach(key => data[key] = true)
      return data
     })
    .catch(() => ({ error: 'failed to fetch collections' }))
})
