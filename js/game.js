var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
});

function preload() {
  this.load.spritesheet('knight', 'assets/knight.png', 64, 64, 200);
}

function create() {
  this.player = this.add.sprite(this.game.width / 2, this.game.height - 300, 'knight');
  this.player.anchor.setTo(0.5, 0.5);
  this.player.animations.add('spear', [58 ], 20, true);

  this.physics.enable(this.player, Phaser.Physics.ARCADE);
  this.player.speed = 100;
  setMovementAnimations(this.player);
  this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  playerMovement(this.cursors, this.player);
}
