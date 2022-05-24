// 创建型
// 功能：创建元素
// 目的： 规范创建步骤

// 工厂模式
// 隐藏创建过程、暴露共同接口
// 需求：
class Shop {
    create(name) {
        return new Game(name);
    }
}

class Game {
    constructor(name) {
        this.name = name;
    }
    init() {}
    run() {}
}

const shop = new Shop();
const pubg = new Game('pubg');

pubg.init();
pubg.run();

// 建造者
// 拆分简单模块、独立运行 => 注重过程与搭配
// 需求：
// 优惠套餐，商品 + 皮肤 进行打折售卖
class Product {
    constructor(name) {
        this.name = name;
    }
    init() {
        return 'game: ' + this.name;
    }
}

class Skin {
    constructor(name) {
        this.name = name;
    }
    init() {
        return 'skin: ' + this.name;
    }
}

class Shop {
    constructor() {
        this.package = '';
    }
    create(name) {
        this.package = new PackageBuilder(name);
    }
    getGamePackage() {
        this.package.getPackage();
    }
}

class PackageBuilder {
    constructor(name) {
        this.game = new Product(name);
        this.skin = new Skin(name);
    }
    getPackage() {
        return this.game.init() + this.skin.init();
    }
}

// 单例模式
// 全局只有一个实例
class PlayStation {
    constructor() {
        this.state = 'off';
    }
    play() {
        if (this.state === 'on') {
            return;
        }
        this.state = 'on';
    }
    shutdown() {
        if (this.state === 'off') {
            return;
        }
        this.state = 'off';
    }
}

// main.js
PlayStation.instance = undefined;
PlayStation.getInstance = function() {
    return function() {
        if(!PlayStation.instance) {
            PlayStation.instance = new PlayStation();
        }
        return PlayStation.instance;
    }()
}

const ps = PlayStation.getInstance();
ps.play();
ps.shutdown();