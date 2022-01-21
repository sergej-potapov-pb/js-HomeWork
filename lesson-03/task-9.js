/*
function solution(a, b) {
    //....
    return [];
}

console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution([1, 1, 1], [])); // [1, 1, 1]
console.log(solution([], [9, 9, 9])); // [9, 9, 9]
console.log(solution([9,9,9], [9,9,9])); // [1, 9, 9, 8]
console.log(solution([], [])); // []
console.log(solution([], [0])); // [0]
console.log(solution([0], [0])); // [0]
console.log(solution([1,1,1,1,1,1,1,1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]));
// // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

*/

function solution(a, b) {
    
    let res = [];
    if (a.length==0 && b.length==0) {
        return res;
        
    };
    if (a.length==0 && b.length>0) {
        return b;
    };
    if (a.length>0 && b.length==0) {
        return a;
    };

    let aStr ='' ;
    let bStr ='' ;
    
    for (const el of a) {
        aStr += el;
    };
    for (const el of b) {
        bStr += el;
    };
    let resNum;
    if (aStr.length>16 || bStr.length>16) {
        resNum = BigInt(aStr)+BigInt(bStr);
    
    } else{
        resNum = parseInt(aStr)+parseInt(bStr);

    }
    let resStr = resNum.toString();
    //console.log(resStr);
    let slen = resStr.length;
    for (let i=0;i<slen;i++) {
        res[i] = parseInt(resStr[i]);
    };

    return res;
}

console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7];
console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution([1, 1, 1], [])); // [1, 1, 1]
console.log(solution([], [9, 9, 9])); // [9, 9, 9]
console.log(solution([9,9,9], [9,9,9])); // [1, 9, 9, 8]
console.log(solution([], [])); // []
console.log(solution([], [0])); // [0]
console.log(solution([0], [0])); // [0]
console.log(solution([1,1,1,1,1,1,1,1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]));

