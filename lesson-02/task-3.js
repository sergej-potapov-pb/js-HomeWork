/*
Перепишите код, заменив оператор `switch` на оператор `if..else`:

```js
switch (val) {
case 'a':
console.log( 'a' );
break;

case 'b':
case 'c':
case 'd':
case 'e':
console.log( 'others' );
break;

default:
console.log( 'unknown' );
}
```
*/

let val = 'a';
if(val == 'a'){
  console.log( 'a' );
  break;
} else if((val =='b') || (val =='c')  || (val =='d')  || (val =='e') ) {
  console.log( 'others' );
  break;
} else {
  console.log( 'unknown' );
}
