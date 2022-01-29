/* 
Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
```
*/

const arrSrc = [1, 2, 3];

// через for
function reverse(arr) {
  var a = [],
    length = arr.length;
  if (length > 0 && Array.isArray(arr)) {
    for (i = 0; i < length; i++) {
      a[i] = arr[length - 1 - i];
    }
    return a;
  } else {
    throw new Error("не верно заданы параметры функции reverse");
  }
}

// через callback
let cbReverse = function (arr, callback) {
  let result = [],
    length = arr.length;
  if (length > 0 && Array.isArray(arr) && typeof callback === "function") {
    for (let i = length; i > 0; i--) {
      callback.call(null, result, arr[i - 1]);
    }
  } else {
    throw new Error("не верно заданы параметры функции cbReverse");
  }
  return result;
};

console.log(reverse(arrSrc));
console.log("-------");

console.log(
  cbReverse(arrSrc, function (res, el) {
    return res.push(el);
  })
);
