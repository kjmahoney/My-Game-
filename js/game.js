var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
});

function preload() {
  this.load.spritesheet('knight', 'assets/knight.png', 64, 64, 110);
}

function create() {
  this.player = this.add.sprite(this.game.width / 2, this.game.height - 300, 'knight');
  this.player.anchor.setTo(0.5, 0.5);
  this.player.animations.add('spear', [58 ], 20, true);
  this.player.animations.add('walk-north', [2,3], 20, true);
  this.player.animations.add('walk-south', [100,101], 20, true);
  this.physics.enable(this.player, Phaser.Physics.ARCADE);
  this.player.body.velocity.y = 0;
  this.player.speed = 100;

  this.cursors = this.input.keyboard.createCursorKeys();
  console.log(this.cursors);
}

function update() {
  this.player.body.velocity.y = 0;
  if (this.cursors.up.isUp && this.cursors.down.isUp) {
    this.player.play('spear')
  }

  if (this.cursors.up.isDown) {
    this.player.body.velocity.y = -this.player.speed;
    this.player.play('walk-north', 5);
  } else if (this.cursors.down.isDown) {
    this.player.body.velocity.y = this.player.speed;
    this.player.play('walk-south', 5)
  }
}