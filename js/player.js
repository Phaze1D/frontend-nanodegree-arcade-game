
/**
* Creates the Player with a given position
* @class
* @extends Entity
* @param {number} x
* @param {number} y
*/
var Player = function (x,y) {
  Entity.call(this, x, y, 'images/char-boy.png');
  this.setHitBox({
    x: this.x + Player.HITBOX_OFFSET_X,
    y: this.y + Player.HITBOX_OFFSET_Y,
    width: 72,
    height: 55
  });
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;


/**
* Updates the player
* @param {number} dt - difference in time between the last update
*/
Player.prototype.update = function (dt) {

}


/** Resets the players position to its inital position*/
Player.prototype.reset = function () {
  this.x = Player.INITIAL_X;
  this.y = Player.INITIAL_Y;
}


/**
* Handles the user input
* @param {string} key - The key code in string format
*/
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
        this.reset();
      }
      break;
  }

  this.hitBox.x = this.x + Player.HITBOX_OFFSET_X;
  this.hitBox.y = this.y + Player.HITBOX_OFFSET_Y;
}

Player.WIDTH = 101;
Player.HEIGHT = 171;
Player.INITIAL_X = GAME_WIDTH/2 - Player.WIDTH/2;
Player.INITIAL_Y = GAME_HEIGHT - Player.HEIGHT - TILE_HEIGHT/1.5;
Player.HITBOX_OFFSET_X = 30;
Player.HITBOX_OFFSET_Y = 85;
