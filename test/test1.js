let arr=[6,7,8,9,];
for (let index = 0; index < arr.length; ++index) {
    console.log(arr[index]);
}
console.log('-------');
  
for (let index in arr) {
    console.log(arr[index]);
}
console.log('-------');

arr.forEach((v, index) => console.log(v));
console.log('-------');

for (const v of arr) {
  console.log(v);
}
console.log('-------');

const arrr = ['a', 'b', 'c'];
arrr.test = 'bad';
// Prints "a, b, c, bad"
for (let i in arrr) {
  console.log(arr[i]);
}

console.log('-------');

// Prints "a, b, c"
for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}
console.log('-------');

// Prints "a, b, c"
arr.forEach((el, i) => console.log(i, el));
console.log('-------');

// Prints "a, b, c"
for (const el of arr) {
  console.log(el);
}
console.log('-------');
