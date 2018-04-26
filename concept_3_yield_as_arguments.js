let square = i=>console.log(i**2);

let generator = function* (){
  square(yield);
  square(yield);
}

let iter = generator()

console.log(iter.next(2)); // generator pauses as it sees yield, thus first call don't do anything  because it is state between line 3 and line 4
console.log(iter.next(3)); // argument replaces from the place where it was paused last time and executes till it sees next yield
console.log(iter.next(4));
