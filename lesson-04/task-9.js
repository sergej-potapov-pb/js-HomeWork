/* 
Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
```
*/

function arrayFill(fillValue, cnt) {
  let result = [];
  if (
    (typeof fillValue === "number" ||
      typeof fillValue === "string" ||
      typeof fillValue === "object" ||
      Array.isArray(fillValue)) &&
    typeof cnt === "number"
  ) {
    for (let i = 0; i < cnt; i++) {
      result.push(fillValue);
    }
  }
  return result;
}

console.log(arrayFill("x", 5)); // [x,x,x,x,x]
