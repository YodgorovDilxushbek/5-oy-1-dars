// forEach
// let arr =[1,2,3,4,5,6,7,8,9]
// let res = arr.forEach(function (value) {
//     console.log(value);

// })

// 2-misol
// let arr =[1,2,3,4,5,6,7,8,9]

// let res = arr.forEach(function (value) {

//    value +=5;
//    console.log(value);

// })

// 3-misol
// let arr =[1,2,3,4,5,6,7,8,9]

// let res = arr.forEach(function (value) {

//    if (value%2==1) {
//     console.log(value);
//    }

// })
// 4-misol
// let arr =[1,2,3,4,5,6,7,8,9]
// let sum=0;
// let res = arr.forEach(function (value,index) {
//   sum++;
// })
// console.log(sum);

// 5-misol
// let arr=[1,2,3,4];
// let kattaMassiv=[21,234,45,634];
// let res=arr.forEach(function (value) {
//     kattaMassiv.push(value);
// })
// console.log(kattaMassiv);

//                                                  map
// 1-misol
// let arr =[5,2,8,6,3,7];
// let res = arr.map(function (value) {
//     return value * 2;
// })
// console.log(res);

// 2-misol
// let arr =[5,2,8,6,3,7];
// let res = arr.map(function (value) {
//     return value * value;
// })
// console.log(res);

// 3-misol
// let arg= ["hello", "world", "salom", "hammaga"];
// let res=arg.map(function(element) {
//     return element[0].toUpperCase() + element.substring(1);
//   });

// console.log(res);
// 4-misol

// let arr = [1,-1,-9,1,2,3]
// let res= arr.map(function (value) {
//     return -value;
// })
// console.log(res);

// 5-misol

// let arr =[5,2,8,6,3,7];
// let res = arr.map(function (value) {
//     return value +3;
// })
// console.log(res);

// FIlter
// 1-misol
// let arr = [2,34,5,7,3,9,8];
// let res = arr.filter(function (value) {
//     return value % 2 == 0;
// })
// console.log(res);

// 2-misol

// let arr = [-2,34,-5,7,-3,9,8];
// let res = arr.filter(function (value) {
//     return value> 0;
// })
// console.log(res);

// 3-misol
// let arr = [-2,3438434,-5,7,-3,9,8,`salomlar` , `nma gapla`];
// let res = arr.filter(function (value) {
//     return value.toString().length > 5;
// })
// console.log(res);
// 4-misol
// let arr = [12,23,43,17,18,20];
// let res = arr.filter(function (value) {
//     return value > 18;
// })
// console.log(res);

// 5-misol
// let arr = [1,2,43,7,8,20];
// let res = arr.filter(function (value) {
//     return value < 10;
// })
// console.log(res);

//                                               find

// 1-misol
// let arr = [1, 12, 34, 3, 4, 5, 43, 90];
// let res = arr.filter(function (value) {
//   if (value > 10) {
//     console.log(value);
//   }
// });

// 2-misol
// let arr = [1, -12, 34, -3, 4, -5, 43, 90];
// let res = arr.filter(function (value) {
//   if (value > 0) {
//     console.log(value);
//   }
// });

// 3-misol
// let arr = [`salom`, `nmagap`,`hello`,`a`,`bc`];
// let res = arr.filter(function (value) {
//   if (value.length > 4) {
//     console.log(value);
//   }
// });


//4-misol
// let arr = [12,23,34,2,32,39,45,532,4,5,];
// let res = arr.filter(function (value) {
//   if (value % 2 == 0) {
//     console.log(value);
//   }
// });

//5-misol
// let arr = [-12,23,34,2,32,-39,-45,532,4,5,0];
// let res = arr.filter(function (value) {
//   if (value>= 0) {
//     console.log(value);
//   }
// });

//                                              some/every
// some
// 1-misol
// let arr = [1,2,3,-4,5,6,-7,8,9];
// let res = arr.some(function (value) {
//     return value <0
    
// })
// console.log(res);

// 2-misol

// let arr = [1,2,3,4,5,6,7,8,9];
// let res = arr.some(function (value) {
//     return value % 2 == 0
    
// })
// console.log(res);

//3-misol 
// let arr = [ `green`,`BMW`,`KIA`];
// let res = arr.some(function (value) {
//     return value == `BMW`;
    
// })
// console.log(res);

// every
// 1-misol
// let arr = [1,2,3,4,5,6,7,8,9];
// let res = arr.every(function (value) {
//     return value >0;
    
// })
// console.log(res);

// 2-misol
// let arr = [ `green`,`BMW`,`KIA`];
// let res = arr.every(function (value) {
//     return typeof value === `string` ;
    
// })
// console.log(res);
// 3-misol
let arr = [1,2,3,4,500,6,7,8,9];
let res = arr.every(function (value) {
    return value < 100;
    
})
console.log(res);