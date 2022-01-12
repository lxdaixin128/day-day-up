class Person { 
  @logProperty
  public name: string;

  constructor(name : string) { 
    this.name = name;
  }
}



function logProperty(target: any, propertyKey: string) {
  delete target[propertyKey];
  const backingField = "_" + propertyKey;

  Object.defineProperty(target, backingField, {
    writable: true,
    enumerable: true,
    configurable: true
  });

  // property getter
  const getter = function (this: any) {
    const currVal = this[backingField];
    console.log(`Get: ${propertyKey} => ${currVal}`);
    return currVal;
  };

  // property setter
  const setter = function (this: any, newVal: any) {
    console.log(`Set: ${propertyKey} => ${newVal}`);
    this[backingField] = newVal;
  };

  // Create new property with getter and setter
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}



const p1 = new Person("semlinker");
p1.name = "kakuqo";