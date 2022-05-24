// 结构型
// 功能： 优化结构实现

// 适配器模式
// 适配独立模块，保证模块间的独立解耦以及连接兼容

class HKDevice {
    getPlug() {
        return '港行插头';
    }
}

class Target {
    constructor() {
        this.plug = new HKDevice();
    }
    getPlug() {
        return this.plug.getPlug() + '+ 插头转接器';
    }
}

const target = new Target();
target.getPlug();

// 装饰器模式
// 动态将责任附加在对象上
class Device {
    create() {
        console.log('PlayStation4');
    }
}
class Phone {
    create() {
        console.log('iphone13');
    }
}

class Decorator {
    constructor(device) {
        this.device = device;
    }
    create() {
        this.device.create();
        this.update(this.device);
    }
    update(device) {
        console.log(device + 'pro');
    }
}

const device = new Device();
device.create();

const newDevice = new Decorator(device);
newDevice.create();

// 代理模式
// 使用代理人来替代原始对象
// 游戏防沉迷
class Game {
    play() {
        return 'playing';
    }
}

class Player {
    constructor(age) {
        this.age = age;
    }
}

class GameProxy {
    constructor(player) {
        this.player = player;
    }
    play() {
        return (this.player.age < 16) ? 'too young to play' : new Game().play();
    }
}