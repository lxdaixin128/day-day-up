// 里氏替换原则LSP
// 要求：子类能够覆盖父类；父类能够出现的地方子类就能够出现

// sprint1
class Game {
    start() {
        // 开机
    }
    shutdown() {
        // 关机
    }
    play() {
        // 开始游戏
    }
}
const game = new Game();
game.play();

// sprint2
class MobileGame extends Game {
    tombStore() { 
        // tombStore
    }
    play() {
        // 开始移动端游戏
    }
}

const mobileGame = new MobileGame();
mobileGame.play();

// 重构
class Game {
    start() {
        // 开机
    }
    shutdown() {
        // 关机
    }
}

class MobileGame extends Game {
    tombStore() {
        // tombStore
    }
    play() {
        // 开始移动端游戏
    }
}

class PCGame extends Game {
    speed() {
        // speed
    }
    play() {
        // 开始PC游戏
    }
}
