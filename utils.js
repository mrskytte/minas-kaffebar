export function loadImgs(imgs) {
  const promises = imgs.map((img) => {
    return new Promise((resolve) => {
      const imgTag = new Image() // Create new img element
      imgTag.src = img
      imgTag.addEventListener('load', resolve)
    })
  })
  console.log('😂', Promise.all(promises))
  return Promise.all(promises)
}
