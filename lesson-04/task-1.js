/*
Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```
*/

const arr = [1, 2, 5];

let myEach = function (arr, callback) {
  if (Array.isArray(arr) && typeof callback === "function") {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      callback(arr[i], i, arr);
    }
  } else {
    throw new Error("не верно заданы параметры функции myEach");
  }
};

myEach(arr, function (num, i, nums) {
  console.log("Number: " + num + ", index: " + i + ",", nums);
});

console.log("-------");

myEach(arr, function (item, index, arr) {
  console.log(item * 2, index);
});
