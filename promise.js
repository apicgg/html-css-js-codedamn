const promiseObj = fetch("/data.json");

promiseObj.then((response) => {
  const promiseObj2 = response.json();
  promiseObj2.then((data) => {
    console.log(data);
  });
});
