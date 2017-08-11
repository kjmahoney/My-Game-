var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
});

function preload() {
  this.load.spritesheet('knight', 'assets/knight.png', 64, 64, 200);
  this.load.spritesheet('archer', 'assets/archer.png', 64, 64, 200);
}

function create() {
  this.player = this.add.sprite(this.game.width / 2, this.game.height - 300, 'knight');
  this.player.anchor.setTo(0.5, 0.5);
  this.physics.enable(this.player, Phaser.Physics.ARCADE);
  this.player.body.collideWorldBounds = true;
  this.player.animations.add('spear-up', [9], 20, true);
  this.player.animations.add('spear-left', [58], 20, true);
  this.player.animations.add('spear-down', [107], 20, true);
  this.player.animations.add('spear-right', [156], 20, true);
  this.player.animations.add('bow-front', [0], 20, true);
  this.player.animations.add('attack-up', [30, 31], 20, true);
  this.player.animations.add('attack-left', [79, 80], 20, true);
  this.player.animations.add('attack-down', [128, 129], 20, true);
  this.player.animations.add('attack-right', [177, 178], 20, true);

  this.physics.enable(this.player, Phaser.Physics.ARCADE);
  this.player.speed = 200;
  setMovementAnimations(this.player);
  this.cursors = this.input.keyboard.createCursorKeys();

  this.attackKey = game.input.keyboard.addKey(Phaser.Keyboard.Z)
}

function update() {
  playerMovement(this.cursors, this.player, this.attackKey);
  if (this.attackKey.isDown) {
    attack(this.player)
  }
}

function attack(player) {
  player.play(`attack-${playerDirection}`, 5);
}
