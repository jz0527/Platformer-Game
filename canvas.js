// setup canvas
let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

function loadSprite(url) {
  let image = new Image()
  let loaded = new Promise((resolve, reject) => {
    image.onload = resolve
  })
  image.src = 'images/' + url
  return {
    image: image,
    loaded: loaded,
  }
}

// draw helpers
function erase() {
  ctx.fillStyle = 'lightblue'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}
