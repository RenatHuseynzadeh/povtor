// 1
// console.log(Boolean(10 > 9))
// true, т.к. 10 больше чем 9

// 2
// console.log(Boolean(10 < 9))
// false т.к 10 меньше чем 9

// 3
// if (1 == 2) {
    // console.log(true);
// } else {
    // console.log(false);
// }
// false, т.к 1 не ровно 2

// 4
// if (1 < 2) {
    // console.log(true);
// } else {
    // console.log(false);
// }
// true, т.к. 1 меньше 2

// 5
// if (1 > 2) {
    // console.log(true);
// } else {
    // console.log(false);
// }
// false т.к 1 не больше 2 

// 6
// let x = 0;
// console.log(Boolean(x));
// false,т.к. булеан проверяет,правда или ложт в данном случае он считает 0 ложным значением

// 7
// let x = -0;
// console.log(Boolean(x));
// опять же false,он считает ложным любое нулевое значение

// 8
// let x = "";
// console.log(Boolean(x));
// false т.к. пустая строка тоже считается ложным значением

// 9
// let x;
// console.log(Boolean(x));
// false т.к. у Х нет значения а это undefined, а он тоже считается ложным значением

// 10
// let x = null;
// console.log(Boolean(x));
// false т.к. null это ничего, он похож на 0 или undefined а это тоже ложь

// 11
// let x = false;
// console.log(Boolean(x));
// false,это логично

// 12
// let x = 10/"H";
// console.log(Boolean(x));
// false т.к. это не делется,и получается NaN а это ложь

// 13
// в if,else нам часто помогают:И-&&,ИЛИ-||,НЕ-!

// 14,15
// if (1 > 2 && 2 < 3 || "hello".length < 4) {
    // console.log(true);
// } else {
    // console.log(false);
// }

// false т.к. 1 не больше 2 и 5 не меньше 4

// 16
// if (1 > 2 || 2 < 3 || "hello".length != 4) {
    // console.log(true);
// } else {
    // console.log(false);
// }

// true т.к. уже видим что 1>2 и это правда дальше не смотрим

// 17
// let money = 10;
// 
// if(money > 5 || money == 5){
    // console.log('Я куплю пирог');
// }else if(money < 5 && money > 1){
    // console.log('Мало денег');
// }else{
    // console.log('Денег нет');
// }

// 18
// let day = new Date().getDay();
// 
// switch (day) {
    // case 1:
    //   console.log("Monday");
    //   break;
    // case 2:
    //   console.log("Tuesday");
    //   break;
    // case 3:
    //   console.log("Wednesday");
    //   break;
    // case 4:
    //   console.log("Thursday");
    //   break;
    // case 5:
    //   console.log("Friday");
    //   break;
    // default:
    //   console.log("Break Time!");
//   }
  