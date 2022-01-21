/*
�������� ������� `f` ������� ���������� ����� ���� ����������. ���������� ���������� ����� ���� �����. ������ ������� ������ ����������� ��������� �������� ������� ����������, ������ ��� ��������� ��� ����� ������ �����.
```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
```
*/


function f(){
    let res = 0;
    for( el of arguments){
        if( typeof el==='number'){
            res += el;
        } else {
            throw new Error("parameter type is not a Number");
        }
    

    }
    return res;
}

f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
