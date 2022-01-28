/* 
Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или многоуровневый массив. Возвращает данная функция сумму всех элементов на всех уровнях.

Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено ни одного числа.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если на каком то уровне было найдено не число и не массив

```javascript
const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3
```
*/

function f(arr) {
  if (Array.isArray(arr)) {
    let resArr = arr.flat(Infinity);
    //console.log(resArr);

    let result = 0;
    let length = resArr.length;

    for (let i = 0; i < length; i++) {
      if (typeof resArr[i] === "number") {
        result += resArr[i];
      } else {
        throw new Error("элемент массива должен быть числом");
      }
    }
    return result;
  } else {
    throw new Error("не верно заданы параметры функции");
  }
}

const arr = [
  [
    [1, 2],
    [1, 2],
  ],
  [
    [2, 1],
    [1, 2],
  ],
];
console.log(f(arr));

const arr2 = [[[[[1, 2]]]]];
console.log(f(arr2));

const arr3 = [[[[[1, 2]]], 2], 1];
console.log(f(arr3));

const arr4 = [[[[[]]]]];
console.log(f(arr4));

const arr5 = [[[[[], 3]]]];
console.log(f(arr5));

const arr6 = [1, 2, 3, "d", 5, 6, 7];
console.log(f(arr6));
