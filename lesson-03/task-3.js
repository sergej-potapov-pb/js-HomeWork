/*
Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
```

*/

function f(a,b,c){
    let res;
    
    if( typeof a==='number' && typeof b ==='number' && typeof c ==='number'){
    
        if(c!=0){ 
            
            res = (a-b)/c;
        } else {
            throw new Error('division by zero')
        };
    } else {
        throw new Error('all parameters type should be a Number')
    };
    return res;
};

console.log( f(9,3,2)); // 3
console.log( f('s',9,3)); // Error: all parameters type should be a Number
console.log( f(9,3,0)); // Error: division by zero
