class Execute {
    actualGame: Game;

    constructor(game: Game) {
        this.actualGame = game;
    }

    extender(){
        this.actualGame.play();
    }
}