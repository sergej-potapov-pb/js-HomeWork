/* 
Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```
*/

const arrSrc = [1, 2, 5, 6, 3, 10];

let mySome = function (arr, callback) {
  if (Array.isArray(arr) && typeof callback === "function") {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      if (callback.call(i, arr[i])) {
        return true;
      }
    }
    return false;
  } else {
    throw new Error("не верно заданы параметры функции mySome");
  }
};

let resSome = mySome(arrSrc, function (num) {
  return num > 10;
});

console.log(resSome);
console.log("-------");

console.log(
  mySome(arrSrc, function (num) {
    return num < 10;
  })
);
