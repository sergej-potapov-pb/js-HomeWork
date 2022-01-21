/*
�������� ������� `f`, ������� �������� �� ������� ����� ������ � ����� �� ������. ������ ������� ������ ����������� ��������� �������� ������� ����������, ������ ��� ��������� ��� ����� ������ �����.
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
            throw new Error("devide by zero");
        };
    } else {
        throw new Error("parameter type is not a Number");
    };
    return res;
}
