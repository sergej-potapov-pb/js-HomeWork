/*
Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
```
*/

const arrSrc = [1, 2, 5, 6, 3, 10];

let myFilter = function (arr, callback) {
  let resFilter = [];
  if (Array.isArray(arr) && typeof callback === "function") {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      if (callback.call(i, arr[i])) {
        resFilter.push(arr[i]);
      }
    }
    return resFilter;
  } else {
    throw new Error("не верно заданы параметры функции myFilter");
  }
};

let resArr = myFilter(arrSrc, function (num) {
  return num > 3;
});

console.log(resArr);
console.log("-------");

console.log(
  myFilter(arrSrc, function (num) {
    return num < 6;
  })
);
