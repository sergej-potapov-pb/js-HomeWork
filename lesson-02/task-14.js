/*
Дано число `n=1000`. Делите его на 2 столько раз, пока результат деления
 не станет меньше 50. Какое число получится? Посчитайте количество итераций,
  необходимых для этого (итерация - это проход цикла), и запишите его в переменную `num`.

*/

let n=1000;
let num=0;

while(n>=50){
  num++;
  let tmp= n/2;
  n = tmp;
  console.log(num + " : " + n);

}
console.log("результат деления :" + n);
console.log("затрачено итераций :" + num);
