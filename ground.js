class Ground {
  constructor(x,y,width, height) {
    // TODO: initialize values for ground
    this.x = x * gridSize
    this.y = y * gridSize
    this.width = width * gridSize
    this.height = height * gridSize

  }

    draw() {
    // TODO: implement draw
    for(let row = 0; row < this.height; row += gridSize) {
      let image = groundSprite.image
      if(row === 0) {
        image = groundTopSprite.image
      }
      for(let column = 0; column < this.width; column += gridSize) {
        ctx.drawImage(
          image, 
          this.x + column - xScroll,
          this.y + row,
          gridSize, 
          gridSize,
        )
      }

      ctx.strokeStyle = 'darkgreen'
      ctx.strokeRect(
        this.x - xScroll, 
        this.y, 
        this.width, 
        this.height,
      )
    }
  }

  // TODO: implement function to check if a position is below ground: isBelow(x, y)

  isBelow(x,y) {
    return (
      this.x < x && 
      x < this.x + this.width && 
      y <= this.y
    )
  }

  // TODO: implement function to check if a position is inside ground: contains(x, y)

  contains(x,y) {
    return (
      this.x < x && 
      x < this.x + this.width && 
      this.y < y && 
      y < this.y + this.height
    ) 
  }

}
