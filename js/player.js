var Player = function (x,y) {

  this.sprite = 'images/char-boy.png';
  this.x = x;
  this.y = y;
}

Player.prototype.update = function (dt) {

}

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function () {
  this.x = Player.INITIAL_X;
  this.y = Player.INITIAL_Y;
}

Player.prototype.handleInput = function (key) {
  switch (key) {
    case 'left':
      if(this.x - TILE_WIDTH >= 0)
        this.x -= TILE_WIDTH;
      break;

    case 'down':
      if(this.y + TILE_HEIGHT + Player.HEIGHT <= GAME_HEIGHT)
        this.y += TILE_HEIGHT;
      break;

    case 'right':
      if(this.x + TILE_WIDTH + Player.WIDTH <= GAME_WIDTH)
        this.x += TILE_WIDTH;
      break;

    case 'up':
      if(this.y - TILE_HEIGHT >= 0){
        this.y -= TILE_HEIGHT;
      }else{
        this.reset()
      }
      break;
  }
}

Player.WIDTH = 101;
Player.HEIGHT = 171;
Player.INITIAL_X = GAME_WIDTH/2 - Player.WIDTH/2;
Player.INITIAL_Y = GAME_HEIGHT - Player.HEIGHT - TILE_HEIGHT/1.5;