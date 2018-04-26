let intervalId = null;

let nextGenerator = function* (){
  console.log("till yield 2.1");
  yield;
  console.log("till yield 2.2");
  yield;
  console.log("till yield 2.3");
  //yield // when this yield is not there continuity is maintained to calle generator.
}

let generator = function* (){
  console.log("till yield 1");
  yield;
  console.log("till yield 2");
  yield* nextGenerator();
  console.log("till yield 3");
  yield;
  console.log("till yield 4");
  yield;
  console.log("till yield 5");
  clearInterval(intervalId)
}

let iter = generator()

intervalId =  setInterval(()=>{iter.next(); console.log("-------------")}, 2000);
