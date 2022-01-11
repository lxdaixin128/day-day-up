class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @sayHi('你好')
  @enumerable(false)
  greet() {
    return "Hello, " + this.name;
  }
}

function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

function sayHi(msg: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = function () {
      console.log(msg)
    }
  };
}


const a = new User('Tom')
a.greet() // 你好, greet方法被重写

const keys = Object.keys(a) 
console.log(keys) // ['name'], greet方法不可枚举





