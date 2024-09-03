class Hero {
  constructor() {
    // TODO: factor this out into reset() and call here
    this.reset()
    
  }

reset() {
    this.x = gridSize * 3.5
    this.y = -10
    this.dx = 0
    this.dy = 0
    this.airborne = true
    xScroll = 0 
    // TODO: reset x scroll
  }

  moveLeft() {
    this.dx = gridSize * -(1 / 10)
  }
  moveRight() {
    this.dx = gridSize * 1 / 10
  }
  jump() {
    if (this.airborne) {
      return
    }
    this.airborne = true
    this.dy = gridSize * -(1 / 3)
  }
  step() {
    // TODO: save starting position for collision detection
    let xPrev = this.x 
    let yPrev = this.y

    this.x += this.dx
    this.y += this.dy

    this.dx *= 0.6

    this.dy += gridSize * 1 / 60

    // TODO: prevent hero from falling quickly through the ground
    let collision = undefined
    world.forEach(ground => {
      let wasAbove = ground.isBelow(xPrev, yPrev)
      let nowInside = ground.contains(this.x, this.y) 
      if(wasABove && nowInside) {
        collison = ground
      }
    })
    if(collision !== undefined) {
      this.y = collision.y
      this.dy = gridSize / 60 
      this.airborne = false 
    } else {
      this.airborne = true
    }
    // TODO: replace this with new ground collision detection
    let ground = canvas.height
    if (this.y > ground) {
      this.y = ground
      this.dy = 0
      this.airborne = false
    }

    // TODO: reset the game when hero falls into position
    if(this.y > canvas.height + gridSize) {
      this.reset()
    }
    
    // TODO: scroll the screen when hero walks beyond edge
    if(this.x > canvas.width /2) {
      xScroll = this.x - (canvas.width / 2)
    }
  }
  draw() {
    let image = heroStandSprite.image

    if (Math.abs(this.dx) > 0.1) {
      let frame = Math.floor(this.x / gridSize)
      if (frame % 2 == 0) {
        image = heroWalkSprite1.image
      } else {
        image = heroWalkSprite2.image
      }
    }
    if (this.airborne) {
      image = heroJumpSprite.image
    }

    // draw sprite
    // TODO: incorporate x scroll into hero draw position
    ctx.drawImage(
      image, (this.x - gridSize / 2) - xScroll, 
      this.y - gridSize, gridSize, gridSize,)

    // draw logical position
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI, false)
    ctx.fill()
  }
}
