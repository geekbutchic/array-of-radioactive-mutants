/******************
 * YOUR CODE HERE *
 ******************/
addMeToEnd = (arr) => {
  arr.push('Colin')
}

addMeToStart = (arr) => {
  arr.unshift('Colin')
}

changeLast = (arr1, value) => {
  arr1.pop() + arr1.push(value)
}

changeLast = (arr1, value) => {
  arr1[arr1.length - 1] = value;
}
// Very manual version 
changeAllValuesTo = (arr, value) =>{
  arr.pop()
  arr.pop()
  arr.pop()
  arr.pop()
  arr.pop()
  arr.pop()
  arr.push(value)
  arr.push(value)
  arr.push(value)
  arr.push(value)
  arr.push(value)
  arr.push(value)
}

changeAllValuesTo = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = value;
  }
}

oddOrEven = (arr) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = 'even'
    } else {
      arr[i] = 'odd'
    }
  }
}


changeNextThreeToValue = (arr) => {
  arr.splice(1, 3)
  arr.push(15)
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
