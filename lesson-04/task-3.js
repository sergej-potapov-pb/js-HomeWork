/* 
Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
```
*/

const arrSrc = [3, 3, 3, 3, 3, 3];

let myEvery = function (arr, callback) {
  if (Array.isArray(arr) && typeof callback === "function") {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      if (!callback.call(i, arr[i])) {
        return false;
      }
    }
    return true;
  } else {
    throw new Error("не верно заданы параметры функции myFilter");
  }
};

let resEvery = myEvery(arrSrc, function (num) {
  return num === 3;
});

console.log(resEvery);
console.log("-------");

console.log(
  myEvery(arrSrc, function (num) {
    return num === 4;
  })
);
