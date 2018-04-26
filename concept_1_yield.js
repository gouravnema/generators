let intervalId = null;

let generator = function* (){
  console.log("till yield 1");
  console.log("till yield 2");
  console.log("till yield 3");
  clearInterval(intervalId);
}

let iter = generator()


intervalId = setInterval(()=>iter.next(), 2000)

//////////////////////////////////////////////////////////////////////////////

let intervalId2 = null;

let generator2 = function* (){
  console.log('************************************************************');
  console.log("g2 till yield 1");
  yield;
  console.log("g2 till yield 2");
  yield;
  console.log("g2 till yield 3");
  clearInterval(intervalId2);
}

let iter2 = generator2()


intervalId2 = setInterval(()=>iter2.next(), 2000)
