## 设计模式
### 基础概念
#### 什么是设计模式
针对设计问题的通用解决方案

#### 学习设计模式的原因
有利于代码复用
有利于代码稳定可拓展
有利于代码可读性提升

#### 什么时候需要设计模式
1. 优先考虑全局设计
2. 合理权衡使用需求以及维护成本

#### 掌握程度
1. 什么是设计模式 => 开发工作中有使用设计模式的概念或者思路
2. 清晰概念 => 了解基本的设计模式分类、常用设计模式类型
3. 不同场景下能关联到对应的模式 => 合理使用

#### 五大原则
1. 开闭原则: 开 - 拓展；闭 - 修改
2. 单一职责原则: 岗位职责单一，互不重叠
3. 依赖倒置原则: 上层不应依赖下层的实现
4. 接口隔离原则
5. 里氏替换原则：子类可以拓展，但是不能改变父类属性

### 设计系统原则
解耦

### 面试案例
面试题：
<!-- 对象集 -->
<!-- 某停车场 -->
，分3
<!-- 层 -->
，每层100个
<!-- 车位 -->
，每个车位都能监控到
<!-- 汽车 -->
的驶入和离开，

<!-- 状态集 -->
1. 车辆进入前，显示每层空余的车辆
2. 车辆进入时，
<!-- 摄像头 -->
可以识别车牌号以及当前时间
3. 车辆出来时，出口
<!-- 显示器 -->
显示
<!-- 数据集 -->
<!-- 车牌号 -->
以及停车时长

设计一套系统
考察点：
a. 考察模块设计以及业务划分理解
b. 实现能力：设计实现、代码实现

```js
    class Car {
        constructor(num) {
            this.num = num;
        }
    }

    // 停车场
    class Park {
        constructor(floors) {
            this.floors = floors || [];
            this.camera = new Camera();
            this.screen = new Screen();
            this.carList = {};
        }

        in(car) {
            // 获取车辆信息
            const info = this.camera.shot(car);

            // 停到停车位
            const i = parseInt(Math.random() * 100 % 100, 10);
            const place = this.floors[0].places[i];
            // TODO: 判断是否停满

            place.in();
            info.place = place;

            // 记录账单信息
            this.carList[car.num] = info;
        }

        out(car) {
            // 获取账单信息
            const info = this.carList[car.num];

            // 车位清理
            const place = info.place;
            place.out();

            this.screen.show(car, info.inTime);

            // 销账
            delete this.carList[car.num];
        }

        emptyNum() {
            return this.floors.map(floor => {
                return floor.index + '层还有' + floor.emptyPlaceNum() + '个空闲车位';
            }).join('\n');
        }
    }

    class Floor {
        constructor(index, places) {
            this.index = index;
            this.places = places || [];
        }
        emptyPlaceNum() {
            let num = 0;
            this.places.forEach(p => [
                if (p.empty) {
                    num += 1;
                }
            ])
            return num;
        }
    }

    class Place {
        constructor(empty) {
            this.empty = true;
        }
        in() {
            this.empty = false;
        }
        out() {
            this.empty = true;
        }
    }

    class Screen {
        show(car, inTime) {
            console.log('当前车辆的车牌号是：', car.num);
            console.log('停车时间', Date.now() - inTime);
        }
    }

    class Camera {
        shot(car) {
            return {
                num: car.num,
                inTime: Date.now()
            }
        }
    }

    // 使用时
    const floors = [];
    for (let i = 0; i < 3; i++) {
        const places = [];

        for (let j = 0; j < 100; j++) {
            places[j] = new Place();
        }

        floors[i] = new Floor(i + 1, places);
    }

    const park = new Park(floors);
```