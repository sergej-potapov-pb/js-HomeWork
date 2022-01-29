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
const nsStart = 0;

let reverse = function (arr, callback, ns) {
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
    throw new Error("не верно заданы параметры функции reverse");
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
