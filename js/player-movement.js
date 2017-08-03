const setMovementAnimations = function(player) {
  player.animations.add('walk-up', [2,3], 20, true);
  player.animations.add('walk-down', [100,101], 20, true);
  player.animations.add('walk-left', [51,52], 20, true);
  player.animations.add('walk-right', [149,150], 20, true);
}

const moveUp = function(player, cursors){
    player.body.velocity.y = -player.speed
    player.play(`walk-up`, 5)
}

const moveDown = function(player){
    player.body.velocity.y = player.speed
    player.play('walk-down', 5);
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
let direction = 'up'

const playerMovement = function(cursors, player) {
  return new Promise((resolve, reject) => {

    player.body.velocity.y = 0;
    player.body.velocity.x = 0;

    if (cursors.up.isDown) {
      moveUp(player)
      direction = 'up'
    }

    if (cursors.down.isDown) {
      moveDown(player)
      direction = 'down'
    }

    if (cursors.left.isDown) {
      moveLeft(player)
      direction = 'left'
    }

    if (cursors.right.isDown) {
      moveRight(player)
      direction = 'right'
    }

    if (cursors.up.isUp &&
        cursors.down.isUp &&
        cursors.right.isUp &&
        cursors.left.isUp) {
          resolve(direction, player);
        }
  }).then((direction) => {
    player.play(`spear-${direction}`)
  })
}
//weapons function, name weapon and direction and gives where he faces
//change all forwards ups etc to one convention
