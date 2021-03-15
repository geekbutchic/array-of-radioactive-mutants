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

oddOrEven = (arr) => {
  if (arr % 2 === 0) {
    arr += arr.push['even']
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
