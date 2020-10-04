var game;
game = new Phaser.Game(500, 650, Phaser.AUTO, '');
game.state.add('Menu', Menu);
game.state.add('Game', Start);
game.state.add('GameOver', TimeUp);
game.state.start('Menu');