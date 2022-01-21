/*  
������ �㭪�� `f`, ����� �����頥� �� �᫠. ��᫮ ��।����� ��ࠬ��஬. ������ �㭪�� ������ ��易⥫쭮 ᮤ�ঠ�� �஢��� �室���� ��ࠬ���, ��⮬� �� �ਭ����� ��� ����� ⮫쪮 �᫮.
```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
```
*/

function f(a){
    let res;
    if( typeof a==='number'){
        res = a*a*a;
    } else {
        throw new Error("parameter type is not a Number");
    }
    return res;
}

let r = f(2); // 8
console.log("-> "+r);
r = f('Content'); // Error: parameter type is not a Number
console.log("-> "+r);
