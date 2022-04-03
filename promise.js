// const promiseObj = fetch("/data.json");

// promiseObj.then((response) => {
//   const promiseObj2 = response.json();
//   promiseObj2.then((data) => {
//     console.log(data);
//   });
// });

function promiseTimeOut() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

// * Typical default promise behavior
// promiseTimeOut()
//   .then(() => {
//     console.log('Statement 1');
//     return promiseTimeOut();
//   })
//   .then(() => {
//     console.log('Statement 2');
//     return promiseTimeOut();
//   })
//   .then(() => {
//     console.log('Statement 3');
//   });

// * Async-await representation for the same
async function boot() {
  await promiseTimeOut();
  console.log('Statement 1');
  // const fn1 = await Promise.resolve('anything');
  // console.log(fn1);
  await promiseTimeOut();
  console.log('Statement 2');
  await promiseTimeOut();
  console.log('Statement 3');
}

boot();
