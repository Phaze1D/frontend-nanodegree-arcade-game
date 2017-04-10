/**
* The superclass for all game objects
* @class
* @param {number} x
* @param {number} y
* @param {string} sprite - url of the sprite to use
 */
var Entity = function (x, y, sprite) {
  this.x = x;
  this.y = y;
  this.sprite = sprite;
  this.hitBox = {};
}

/** Renders the entity's sprite */
Entity.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/** Sets the entity's hitbox */
Entity.prototype.setHitBox = function (hitBox) {
  this.hitBox = hitBox;
};
