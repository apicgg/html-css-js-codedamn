const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const counterEL = document.getElementById('counter');
const ulElement = document.getElementById('list-item');
let counter = 0;

incrementButton.addEventListener('click', function () {
  counter++;
  counterEL.innerText = counter;

  // Create an li element
  const li = document.createElement('li');
  ulElement.appendChild(li);
  li.innerHTML = '<b>Sentence</b> ' + counter;
});

decrementButton.addEventListener('click', function () {
  --counter;
  counterEL.innerText = counter;

  // Remove the last element
  if (counter >= 0) {
    const getList = document.querySelectorAll('li');
    ulElement.removeChild(getList[counter]);
  }

  // For the negetive list
  if (counter < 0) {
    // console.log(counter);
    const li = document.createElement('li');
    ulElement.appendChild(li);
    li.innerHTML = '<b>Sentence</b> ' + counter;
  }
});
