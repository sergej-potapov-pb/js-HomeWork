/*
Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.

*/

let arr = [1,2,3,4,5,6];

console.log(arr);
for(let i=0; i<arr.length; i++){
  for(let z=i; z<arr.length;z++ ){
     if(arr[i] < arr[z]){
       let tmp = arr[i];
       arr[i] = arr[z];
       arr[z] = tmp;
     }
  }
}
console.log(arr);
