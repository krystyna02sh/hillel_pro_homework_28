"use strict";

while (true) {
  const elementsInput = prompt('Enter numbers separating them by ","');
  if (elementsInput === null) {
    alert("Okay good bye");
    break;
  } else if (!elementsInput) {
    alert("Nothing is entered");
    break;
  } else {
    const userArray = elementsInput.split(',');
    let sum = 0;
    for (let i = 0; i < userArray.length; i++) {
      const num = userArray[i];
      const numString = num;
      const number = parseFloat(userArray[i]);
      if (isNaN(num) || !(numString !== null && numString !== void 0 && numString.trim()) || !isFinite(number)) {
        alert("Non-numeric values are entered");
        break;
      } else {
        sum += number;
        alert('Sum is' + sum);
        break;
      }
    }
  }
}
