/*
Написать код который посчитает сумму всех элементов в масиве.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.

*/

let arr = [1,2,3,4];
let asum=0;
let arrLength=arr.length;
for(let i=0; i<arrLength; i++){
  asum+=arr[i];
}
console.log(asum);
