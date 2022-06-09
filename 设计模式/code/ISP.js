// ISP 接口隔离
// 目标：多个专业的接口比单个胖接口好用

// 需求
// 开发游戏，实现游戏中台 —— 快速生产游戏
// PUBG LOL run shot mega
class Game {
  constructor(name) {
    this.name = name;
  }
  run() {
    // 跑
  }
  shot() {
    // 开枪
  }
  mega() {
    // 开大
  }
}
class LOL extends Game {
  constructor() {}
}
class PUBG extends Game {
  constructor() {}
}

const pubg1 = new PUBG('pubg');
pubg1.run();
pubg1.shot();

// 重构 - 拆分多个专业接口，每个接口服务于单个功能模块
class Game {
  constructor(name) {
    this.name = name;
  }
  run() {
    // 跑
  }
}

class FPS {}

class MOBA {
  constructor() {}
  mega() {}
}

class LOL extends Game {
  constructor() {}
  mega() {}
}
class PUBG extends Game {
  constructor() {}
  shot() {}
}
