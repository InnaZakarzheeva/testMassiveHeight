var TimeUp = {
    preload: function(){
        game.load.image('background', './assets/background.jpg');
        game.load.image('timeup', './assets/text-timeup.png');
    },
    create: function(){
        this.add.image(0,0,'background');
        this.add.image(70,350,'timeup');
    }
}