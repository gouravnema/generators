let intervalId = null;

let generator = function* (){
  console.log("till yield 1");
  yield 10;
  console.log("till yield 2");
  yield;
  console.log("till yield 3");
  clearInterval(intervalId);
}

let iter = generator()
intervalId =  setInterval(()=>console.log(iter.next()), 2000)
