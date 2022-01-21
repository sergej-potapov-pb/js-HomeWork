/*
Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
```
*/

function f(a){
    let res;
    if( typeof a==='number'){
        if((a>=1) && (a<=7)){
         switch(a){
            case 1: res ="понедельник";
                    break;
            case 2: res = "вторник";        
                    break;
            case 3: res = "среда";        
                    break;
            case 4: res = "четверг";        
                    break;
            case 5: res = "пятница";        
                    break;
            case 6: res = "суббота";        
                    break;
            case 7: res = "восскресение";        
                    break;
        }
     
        } else {
                throw new Error("parameter should be in the range of 1 to 7")

        };
    } else {
        throw new Error("parameter type is not a Number")
    }
    return res;
}

console.log( f(1)); // Воскресенье
console.log( f(2)); // Понедельник
console.log( f(8)); // Error: parameter should be in the range of 1 to 7
console.log( f('1')); // Error: parameter type is not a Number