function Get(id, cb) {
  setTimeout(() => {
    cb({ id: id });
  }, 1000);
}

const Recursion = (arr, func) => {
  let i = 0;
  let res = [];
  function next() {
    if (i > arr.length - 1) {
      return func(res);
    }
    return new Promise((resolve, reject) => {
      Get(arr[i], resolve);
    }).then(data => {
      res.push(data);
      i++
      next();
    })
  }
  next();
}

const PromiseBasedAsyncCall = (arr, func) => {
   return Promise.all(arr.map(item =>
    new Promise((resolve, reject) => {
      Get(item, resolve);
    }))).then(func)
}
console.log('Recursion result will be displayed in 4 seconds...');
Recursion([123, 321, 333, 111], res => console.log('Recursion result',res));

PromiseBasedAsyncCall([123, 321, 333, 111], res => console.log('Promise based result',res));