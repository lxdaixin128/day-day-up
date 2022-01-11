function Line(x, y) {
  this.x = x * 2
  this.y = y * 2
}

Line.prototype.moveTo = function (x, y) {
  this.x = x
  this.y = y
}

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  moveTo(x, y) {
    this.x = x
    this.y = y
  }
}

class Point2 extends Point {
  constructor(x, y) {
    super(x, y)
    this.name = 'name'
  }
}

function main () {
  const point = new Point(1, 2)
      Line.prototype = point
      const line = new Line(1, 2)
      const point2 = new Point2(1, 2)
      console.log(point, point2)

      // 原型链：
      console.log(point2.__proto__.__proto__.__proto__.__proto__ === null) // true
      console.log(line.__proto__.__proto__.__proto__.__proto__ === null) // true

      // 原型链分解：
      console.log(point2.__proto__ === Point2.prototype) // true
                                            // ||
                           console.log(Point2.prototype.__proto__ === Point.prototype)

      console.log(line.__proto__ === Line.prototype) // true
                                            // ||
                         console.log(Line.prototype.__proto__ === Point.prototype) // true
                                                                          // ||
                                                       console.log(Point.prototype.__proto__ === Object.prototype) // true                      
}