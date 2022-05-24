// 开闭原则（open closed principle）
// 目标：已有的场景下，对于需要拓展的进行开放，拒绝直接的功能修改

// sprint1 - 青年节活动，吃鸡要高亮 + LOL需要弹出折扣
// render
if(game === 'PUBG') {
    // ……高亮
} else {
    // ……
}

// event
if(game === 'LOL') {
    // 弹出折扣框
} else {
    // 付款
}

// sprint2 - 要对部分游戏进行置灰 + 其付款页面要显示停止发售(xxx)
// render
if(game === 'PUBG') {
    // ……高亮
} else if(game === 'xxx') {
    // ……灰色
} else {
    // ……
}

// event
if(game === 'LOL') {
    // 弹出折扣框
} else if(game === 'xxx') {
    // break + 提示停止发售
} else {
    // 付款
}

// 重构
// render
gameManager(game).setColor();

// event
gameManager(game).openDialog();

// game库
function gameManager(game) {
    return `${game}Manager`;
}

// 导引
const LOLManager = {
    setColor () {
        // 正常
    },

    openDialog() {
        // 折扣框
    }
}

const PUBGManager = {
    setColor () {
        // 高亮
    },

    openDialog() {
        // 付款
    }
}

// 重构2
// 默认逻辑
class game {
    constructor(name) {
        this.name = name;
    }

    setColor () {
    }

    openDialog() {
    }
}

class LOL extends game {
    openDialog() {
        // ……折扣
    }
}

class PUBG extends game {
    setColor () {
        // ……高亮
    }
}

class xxx extends game {
    setColor () {
        // ……置灰
    }

    openDialog() {
        // break
    }
}

// extend mixin extends
// base.vue PUBG.vue
