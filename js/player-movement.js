const setMovementAnimations = function(player) {
  player.animations.add('walk-up', [2,3], 20, true);
  player.animations.add('walk-down', [100,101], 20, true);
  player.animations.add('walk-left', [51,52], 20, true);
  player.animations.add('walk-right', [149,150], 20, true);
}

//potential spear shuffle could be used as equip unequip
// player.animations.add('walk-left', [58,76], 20, true);

const moveUp = function(player, cursors){
    player.body.velocity.y = -player.speed
    player.play(`walk-up`, 5)
}

const moveDown = function(player){
    player.body.velocity.y = player.speed
    player.play('walk-down', 5)
}

const moveRight = function(player){
    player.body.velocity.x = player.speed;
    player.play('walk-right', 5);
}

const moveLeft = function(player){
    player.body.velocity.x = - player.speed;
    player.play('walk-left', 5)
}
//Should probably move to a preset page
let playerDirection = 'up'

const playerMovement = function(cursors, player, attackKey) {
  return new Promise((resolve, reject) => {

    player.body.velocity.y = 0;
    player.body.velocity.x = 0;

    if (cursors.up.isDown) {
      moveUp(player)
      playerDirection = 'up'
    }

    if (cursors.down.isDown) {
      moveDown(player)
      playerDirection = 'down'
    }

    if (cursors.left.isDown) {
      moveLeft(player)
      playerDirection = 'left'
    }

    if (cursors.right.isDown) {
      moveRight(player)
      playerDirection = 'right'
    }

    if (attackKey.isUp &&
        cursors.up.isUp &&
        cursors.down.isUp &&
        cursors.right.isUp &&
        cursors.left.isUp) {
          resolve(playerDirection, player);
        }
  }).then((playerDirection) => {
    // player.play(`spear-${playerdirection}`)
    player.animations.stop();
  })
}
