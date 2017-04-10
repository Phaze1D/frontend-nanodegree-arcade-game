/**
* Creates an enemy with a row and velocity
* @class
* @extends Entity
* @param {number} x
* @param {number} row - The row where the enemy lives
* @param {number} velocity - The enemies velocity
*/
var Enemy = function(x, row, velocity) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

  Entity.call(this, x, TILE_HEIGHT/1.33 - Enemy.HEIGHT/2 + TILE_HEIGHT * row, 'images/enemy-bug.png');
  this.velocity = velocity;
  this.setHitBox({
    x: this.x,
    y: this.y + Enemy.HITBOX_OFFSET_Y,
    width: Enemy.WIDTH,
    height: 70
  });
};

Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x + (this.velocity * dt) < GAME_WIDTH + Enemy.WIDTH){
      this.x += (this.velocity * dt);
    }else{
      this.x = -Enemy.WIDTH;
    }
    this.hitBox.x = this.x;
};


Enemy.WIDTH = 101;
Enemy.HEIGHT = 171;
Enemy.HITBOX_OFFSET_X = 0;
Enemy.HITBOX_OFFSET_Y = 75;
