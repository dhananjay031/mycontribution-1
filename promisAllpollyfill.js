const p1 = new Promise((res, rej) => setTimeout(()=>{
    res(500);
}, 500))

const p2 = new Promise((res,rej) => setTimeout(()=>{
    res(1000);
}, 1000))

function myPromiseAll(promiseArray) {
  let results = []

  return new Promise((res, rej) => {
    promiseArray.forEach((promise, index) => {
      promise.then(data => {
        results[index] = data;
        if (index === promiseArray.length - 1) {
          res(results);
        }
      }).catch(error => {
        rej(error);
      })
    })
  })
}

myPromiseAll([p1, p2]).then((val)=>{
    console.log(val)
}).catch(err=>{
    console.log(err)
})
