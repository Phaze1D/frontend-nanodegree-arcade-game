/**
* Creates an enemy with a row and velocity
* @class
* @param {number} x
* @param {number} row - The row where the enemy lives
* @param {number} velocity - The enemies velocity
*/
var Enemy = function(x, row, velocity) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = TILE_HEIGHT/1.33 - Enemy.HEIGHT/2 + TILE_HEIGHT * row;
    this.velocity = velocity;
};


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
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.WIDTH = 101;
Enemy.HEIGHT = 171;
