/*  
Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
```
*/

function f(a){
    let res;
    if( typeof a==='number'){
        let res = a*a*a;
    } else {
        throw new Error("parameter type is not a Number");
    }
    return res;
}

f(2); // 8
f('Content'); // Error: parameter type is not a Number
