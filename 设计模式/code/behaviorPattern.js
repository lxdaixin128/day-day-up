// 行为型
// 不同对象之间行为逻辑的抽象化

// 命令模式
// 请求以命令的形式包裹在对象中，并传给调用对象

// 角色命令接受者
class Receiver {
    execute() {
        console.log('开始奔跑');
    }
}

class Operator {
    constructor(command) {
        this.command = command;
    }
    run() {
        this.command.execute();
    }
}

// 指令器
class Command {
    constructor(receiver) {
        this.receiver = receiver;
    }
    execute() {
        this.receiver.execute();
    }
}

const soldier = new Receiver();
const order = new Command(soldier);
const player = new Operator(order);
player.run();

// 模板模式
// 模板中，定义好个方法的步骤，方法本身更关注自己的事情
class Device {
    constructor(executePipeLine) {
        // executePipeLine
    }
    powerOn() {
        console.log('开机');
    }
    login() {
        console.log('登录账号');
    }
    clickStart() {
        console.log('开始游戏');
    }
    enterGame() {
        console.log('进入战场');
    }
    play() {
        this.powerOn();
        this.login();
        this.clickStart();
        this.enterGame();
    }
}

// 观察者模式
// 当一个属性发生改变时，观察者会连续引发所有的相关类型的状态改变

class MediaCenter {
    constructor() {
        this.state = '';
        this.observers = [];
    }
    attach(observer) {
        this.observers.push(observer);
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.notifyAllobservers();
    }
    notifyAllobservers() {
        this.observers.forEach(ob => {
            ob.update();
        })
    }
}

class Observer {
    constructor(name, center) {
        this.name = name;
        this.center = center;
        this.center.attach(this);
    }
    update() {
        return {
            name: this.name,
            state: this.center.getState()
        }
    }
}
const center = new MediaCenter();
const ps = new Observer('ps', center);

center.setState('on');

// 职责链
// 1. 链式调用 2. 职责独立 3. 顺序执行

class Action {
    constructor(name) {
        this.name = name;
        this.nextAction = null;
    }
    setNextAction(action) {
        this.nextAction = action;
    }
    handle() {
        console.log(this.name + '请审批');
        if (this.nextAction !== null) {
            this.nextAction.handle();
        }
    }
}

const dad = new Action('爸');
const mom = new Action('妈');
const wife = new Action('夫人');

dad.setNextAction(mom);
mom.setNextAction(wife);

dad.handle();

// generator()
// .next()
