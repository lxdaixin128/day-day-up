

function* generator() {
  const list = [1, 2, 3]

  for (let i of list) {
    yield i;
  }
}

let g = generator();

console.log(g.next());
console.log(g.next());
console.log(g.next());


function* sendParameter(){
  console.log("start");
  var x = yield '2';
  console.log("one:" + x);
  var y = yield '3';
  console.log("two:" + y);
  console.log("total:" + (x + y));
}


var sendp2 = sendParameter();
sendp2.next(10);
// start
// {value: "2", done: false}
sendp2.next(20);
// one:20
// {value: "3", done: false}
sendp2.next(30);
// two:30
// total:50
// {value: undefined, done: true}