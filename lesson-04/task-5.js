/* 
Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);
```
*/

const arrSrc = [1, 2, 5, 6, 3, 10];
//const arrSrc = [2, 5, 2];
const nsStart = 0;

let myReduce = function (arr, callback, ns) {
  let result = ns;
  if (
    Array.isArray(arr) &&
    typeof callback === "function" &&
    (typeof ns === "string" || typeof ns === "number")
  ) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      result = callback.call(null, result, arr[i]);
    }
  } else {
    throw new Error("не верно заданы параметры функции myFilter");
  }
  return result;
};

let resReduce = myReduce(
  arrSrc,
  function (nsStart, num) {
    return nsStart + num;
  },
  nsStart
);

console.log(resReduce);
console.log("-------");

const arrStr = ["Проверяем ", "мою ", "функцию ", "Reduce"];
const startStr = "";

console.log(
  myReduce(
    arrStr,
    function (startStr, word) {
      return startStr.concat(word);
    },
    startStr
  )
);
