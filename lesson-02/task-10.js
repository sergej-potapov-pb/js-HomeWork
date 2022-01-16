/*
Отсортировать массив по возрастанию.

```javascript
var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/
let arr = [6,5,4,3,2,1];

console.log(arr);
let arrLength=arr.length;
for(let i=0; i<arrLength; i++){
  for(let z=i; z<arrLength;z++ ){
     if(arr[i] > arr[z]){
       let tmp = arr[i];
       arr[i] = arr[z];
       arr[z] = tmp;
     }
  }
}
console.log(arr);
