// variables
let maxY = 12
let gridSize = Math.ceil(canvas.height / maxY)

let heroStandSprite = loadSprite('hero_stand.png')
let heroJumpSprite = loadSprite('hero_jump.png')
let heroWalkSprite1 = loadSprite('hero_walk1.png')
let heroWalkSprite2 = loadSprite('hero_walk2.png')
let groundSprite = loadSprite('ground.png')
let groundTopSprite = loadSprite('ground_top.png')


//TODO: initializing the x scroll position 
let xScroll = 0
// TODO: initialization of variables
let hero = new Hero()

let world = [
  new Ground(2, 2, 18, 2),
  new Ground(8, 5, 2, 1),
  new Ground(12, 7, 6, 3),
  new Ground(22, 6, 4, 1),
]

let keyPressed = {}

// user input
window.addEventListener('keydown', event => {
  keyPressed[event.code] = true
})
window.addEventListener('keyup', event => {
  keyPressed[event.code] = false
})

// game loop
function loop() {
  if (keyPressed['ArrowLeft']) {
    hero.moveLeft()
  }
  if (keyPressed['ArrowRight']) {
    hero.moveRight()
  }
  if (keyPressed['Space']) {
    hero.jump()
  }
  hero.step()

  erase()
  // TODO: draw each ground item
  world.forEach(g => g.draw())
  hero.draw()

  setTimeout(() => loop(), 1000 / 60)
}

async function loadGame() {
  // wait for images to load
  await heroStandSprite.loaded
  await heroJumpSprite.loaded
  await heroWalkSprite1.loaded
  await heroWalkSprite2.loaded
  await groundSprite.loaded
  await groundTopSprite.loaded

  // start game loop
  loop()
}

loadGame()


