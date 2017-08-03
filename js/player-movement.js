const setMovementAnimations = function(player) {
  player.animations.add('walk-north', [2,3], 20, true);
  player.animations.add('walk-south', [100,101], 20, true);
  player.animations.add('walk-west', [51,52], 20, true);
  player.animations.add('walk-east', [149,150], 20, true);
}

const playerMovement = function(cursors, player) {
  player.body.velocity.y = 0;
  player.body.velocity.x = 0;

  if (cursors.up.isUp &&
      cursors.down.isUp &&
      cursors.right.isUp &&
      cursors.left.isUp
    ) {
    player.play('spear')
  }

  if (cursors.up.isDown) {
    player.body.velocity.y = -player.speed;
    player.play('walk-north', 5);
  } else if (cursors.down.isDown) {
    player.body.velocity.y = player.speed;
    player.play('walk-south', 5)
  }

  if (cursors.left.isDown) {
    player.body.velocity.x = - player.speed;
    player.play('walk-west', 5)
  } else if (cursors.right.isDown) {
    player.body.velocity.x = player.speed;
    player.play('walk-east', 5);
  }
}
