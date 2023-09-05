// 1
// const letters = new Set(["a","b","c"])
// const lll = new Set()
// 
// 
// 
// letters.forEach (function(value){
    // lll.add(value)
// })
// 
// console.log(lll);

// 2

// 3
// const numbers = [45, 12, 3, 2, 1, 35];
// 
// 
// const evenNumbers = numbers.filter(function(number) {
    // if(number>5){
        // console.log(number);
    // }
// });


// 4
// const numbers = [45, 12, 3, 2, 1, 35];
// 
// const sum = numbers.reduce(function(a, c) {
    // return a + c;
// }, 0);
// 
// console.log(sum); 


// 5
// const numbers = [45, 12, 3, 2, 1, 35];
// 
// const sum = numbers.reduce(function(a, c) {
    // return a + c;
// }, 0);
// 
// console.log(sum + 50);

// 6
// это не совсем работает т.к. они похожи с reduce и он будет проверять всё сразу

// 7

// 8
// const fruits = ['apple', 'banana', 'orange', 'grape'];
// 
// const indexapple = fruits.indexOf('apple');
// 
// console.log(indexapple); 


// 9
// const fruits = ['apple', 'banana', 'orange', 'apple', 'grape'];
// 
// const Lindexapple = fruits.lastIndexOf('apple');
// console.log(Lindexapple);

// 10
// const fruits = ['apple', 'banana', 'orange', 'apple', 'grape'];
// 
// console.log(fruits.includes('apple'));

// 11
// почему не работает?
// const numbers = [1, 3, 4, 9, 0, 20];
// const fff = numbers.find(function(num) {
    // if(num > 5){
        // console.log(num);
        // break()
    // }
// });
// console.log(fff);

// этот работает
// const numbers = [1, 3, 4, 9, 0, 20];
// const fff = numbers.find(function(num) {
    // return num > 5
// });
// console.log(fff); 

// 12
// const numbers = [1, 3, 4, 9, 0, 20];
// let ggg = 0
// const vvv = numbers.find(function(num) {
    //  return num > 5
    // 
    // 
//  });
//  console.log(numbers.indexOf(vvv));

// 13

// 14
// let obj = {
    // a: 1,
    // b: 2,
    // c: 3
// }
// 
// console.log(Object.keys(obj));