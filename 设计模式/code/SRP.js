// 通过解耦让每一个模块职责更加独立   单依职责
// 目标： 一个功能模块只做一件事

// sprint
// game store
class PUBGManager {
  openDialog() {
    // 弹框
    // 计算金额
    setPrice();
  }
}

const game = new PUBGManager();
game.openDialog(); // 弹框之后计算金额 弹框《 = 》计算金额 两个模块耦合

// 重构
// 已经完成的是：基于游戏维度做了模块拆分
// TBD：基于功能纬度的模块解耦
// gameManager.js - 业务
class PUBGManager {
  constructor(command) {
    this.command = command;
  }
  openDialog(price) {
    // 计算金额
    this.command.setPrice(price);
  }
}

// optManager.js - 核心库
class PriceManager {
  setPrice(price) {
    // 配置金额
  }
}

// main.js
const exe = new PriceManager();
const pubg = new PUBGManager(exe);
pubg.openDialog(15);
