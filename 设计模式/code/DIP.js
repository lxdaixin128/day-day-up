// DIP  依赖倒置
// 目标： 面向抽象进行coding，而不是对实现进行coding，降低需求与技术底层的耦合

// 需求
// sprint1
// 分享功能
class Store {
  constructor() {
    this.share = new Share();
  }
}

class Share {
  shareTo() {
    // 分享到不同的平台
  }
}

const store = new Store();
store.share.shareTo('wx');

// sprint2
// 评分功能
class Store {
  constructor() {
    this.share = new Share();
    this.rate = new Rate();
  }
}

class Share {
  shareTo() {
    // 分享到不同的平台
  }
}

class Rate {
  star(stars) {
    // 评分
  }
}

const store1 = new Store();
store.rate.star(5);

// 重构
// 暴露挂载 => 动态挂载
class Store {
  // 维护模块名单
  static modules = new Map();

  constructor() {
    // 遍历名单实现初始化挂载全模块
    for (let module of Store.modules.values()) {
      module.init(this);
    }
  }

  // 注入功能模块
  static inject(module) {
    Store.modules.set(module.constructor.name, module);
  }
}

class Share {
  init(store) {
    store.share = this;
  }
  shareTo(platform) {
    // 分享
  }
}

class Rate {
  init(store) {
    store.rate = this;
  }
  star(stars) {
    // 评分
  }
}

const rate = new Rate();
Store.inject(rate);

const store2 = new Store();
store.rate.star(5);
