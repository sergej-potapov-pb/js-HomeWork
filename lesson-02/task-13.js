/*
Дан массив с элементами `[1, 2, 5, 9, 4, 13, 4, 10]`.
С помощью цикла `for` и оператора `if` проверьте есть ли в массиве элемент со значением,
 равным 4. Если есть — выведите на экран `Есть!` и выйдите из цикла.
 Если нет - ничего делать не надо.
*/

let arr=[1, 2, 5, 9, 4, 13, 4, 10];

let arrLength=arr.length;
for(let i=0; i<arrLength; i++){
  if(arr[i]==4){
    console.log("Есть!");
    break;
  }
}
