/*
Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой). Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.

```js
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0
```

*/

function getDivisors(numb) {
  var resArr = [];
  if (typeof numb === "number") {
    if (numb != 0) {
      for (var i = 1; i <= numb; i++) {
        if (numb % i == 0) {
          resArr.push(i);
        }
      };
    } else {
      throw new Error('parameter can\'t be a 0')
    };
  } else {
    throw new Error('parameter type is not a Number')
  }
  return resArr;
}

console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
console.log(getDivisors(28));
console.log(getDivisors("Content")); // Error: parameter type is not a Number
//console.log(getDivisors(0)); // Error: parameter can't be a 0
