var config = {
	type: Phaser.CANVAS,
	width: 800,
	height: 600,

	scene: {
		key: 'main',
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

function preload() {
	this.load.image('card_nope', 'img/nope.jpg');
	this.load.image('card_attack', 'img/attack.png');
	this.load.image('card_defuse', 'img/defuse.png');
	this.load.image('card_favor', 'img/favor.png');
	this.load.image('card_see_the_future', 'img/see_the_future.png');
	this.load.image('card_skip', 'img/skip.png');
}

function create() {
	this.card = this.add.sprite(0, 0, "card_nope");
}

function update() {

}