/* 
Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);
```
*/

const arrSrc = [1, 2, 3];
const nsStart = 0;

let myReduceRight = function (arr, callback, ns) {
  let result = ns,
    length = arr.length;
  if (
    length > 0 &&
    Array.isArray(arr) &&
    typeof callback === "function" &&
    (typeof ns === "string" || typeof ns === "number")
  ) {
    for (let i = length; i > 0; i--) {
      result = callback.call(null, result, arr[i - 1]);
    }
  } else {
    throw new Error("не верно заданы параметры функции myFilter");
  }
  return result;
};

let resReduce = myReduceRight(
  arrSrc,
  function (nsStart, num) {
    return nsStart + num;
  },
  nsStart
);

console.log(resReduce);
console.log("-------");

const arrStr = ["Проверяем ", "мою ", "функцию ", "ReduceRight "];
const startStr = "";

console.log(
  myReduceRight(
    arrStr,
    function (startStr, word) {
      return startStr.concat(word);
    },
    startStr
  )
);
