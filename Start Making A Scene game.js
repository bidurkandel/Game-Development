// Create a create() function here:
function create() {
  this.add.text(150, 200, "Game Starts Here!");
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
  scene: {
    create
  },

	backgroundColor: "#a0a0dd",
}

const game = new Phaser.Game(config)
