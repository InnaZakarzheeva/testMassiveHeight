var button, counter;
var Menu =
    {
        preload: function ()
        {
            game.load.image('background', './assets/background.jpg');
            game.load.image('logo', './assets/donuts_logo.png');
            game.load.image('play', './assets/btn-play.png');
            game.load.image('sound', './assets/btn-sfx.png');
            game.load.audio('menuSound', './assets/audio/background.mp3');
        },
 
        create: function ()
        {
            // Создаём и добавляем спрайт в нашу игру. Спрайтом будет
            // игровой лого для меню
            // Аргументы: X, Y, имя изображения (см. выше)
            this.add.image(0, 0, 'background');
            this.add.image(0, 150, 'logo');
            this.add.button(160,500, 'play', this.startGame, this);
            button = this.add.button(500,20, 'sound', this.Sound, this);
            music = this.add.audio('menuSound');
            music.play();
        },
        startGame: function ()
        {
            music.stop();
            // Меняем состояние "Меню" на состояние "Игра"
            this.state.start('Game');
        },
        Sound: function(){
            counter++;
            if (counter%2 == 0){
                music.play();
            } else{
                music.stop();
            }
        }
    };