//----------    callback   ------------ //

// function fun3(){
//     console.log('FSD10');

// }
// function fun2(){
//     console.log('Muthukumar');
//      fun3();
// }


// function fun1() {
//     console.log('hii');
//     fun2(fun3);

// }
// fun();
// function fun() {
//     var a = 'Wellcom';
//     var b = 'Fabevy';
//     var c = a.concat(b);
//     console.log(c);
//     fun1(fun2);
// }

//------------------    Call Backhell  -----------------//

//    nested of CallBack its called call backehell    //

//------------------    Promise   -------------------//

// var a = 10;
// var b = 5;
// var c;
// function add() {
//         return new Promise(function (resolve, reject) {

//         console.log('To perform Addition');
//         resolve();
//        })
// };
// function addresult() {
//     return new Promise( function (resolve, reject){
//         c = a + b;
//         console.log(c);
//         resolve();
//     })
// }
// function sub() {
//     return new Promise((resolve, reject) => {
//         console.log('To perform Subtraction');

//         resolve();
//     })
// }
// function subresult() {
//     return new Promise((resolve, reject) => {
//         c = a - b;
//         console.log(c);
//         reject();
//     })
// }

// function rej(){
//     return new Promise(function(resolve,reject){
//      console.log('To perform Add and Sub');
//      reject()
//     })
// }
// add()
//     .then(addresult)
//     .then(sub)
//     .then(subresult)

//     .catch(function () {
//         console.log('Oparation Ovar');
//     })


// ------------------- Async / Await --------------------

// var a = 10;
// var b = 5;
// var c;


// function add() {
//     console.log('To perform Addition');

// }

// //function addresult(){  
// var set1 =  setTimeout(function addresult (){
//     c = a + b;
//     console.log(c);

// },1000)
// //}

// function sub(){
//     console.log('To Perform Subtraction');
// }

// //function subresult(){
// var set2 =   setTimeout(function subresult (){
//     c = a - b;
//     console.log(c);
// },3000)
// //}
 
// wait();
// async function wait(){
//     add()
//     await set1()
//     sub()
//     await set2()
// }    

//------------Methode-2--------------
   
// function add() {
//     return new Promise(function (resolve, reject) {
//         c = a + b;
//         console.log('10 + 5 = ' + c);
//         resolve()
//     })

// }

// function sub() {

//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             c = a - b;
//             console.log('10 - 5 = ' + c);
//             resolve()
//         }, 3000)
//     })
// }

// function dev() {
//     return new Promise(function (resolve, reject) {
//         c = a / b;
//         console.log('10 / 5 = ' + c);
//         resolve()
//     })
// }

// wait()
// async function wait() {
//     add()
//     await sub()
//     dev()
// }

// --------------------- Hoisting -------------------

// console.log(a); // undifined

// var a = 5;  

//hoisting ont using in let , 

//--------------------- let , var , const -------------

// var a = 2;
 
// var a = 3;

// console.log(a); // value update ,global scope,hoisting declaration,

// const b = 10;  // Never Ever Change,

// let c = 10;    // Block scope ,


// --------------------- spread -----------------------

// var  a = [10,20,30,40,50,60];

// var b = [];

// b = [...a];

// b[1] = 'muthu';

// console.log(a,b);

// var obj1 = {
//     name:'muthu',
//     id : 1,
//     age : 22,
//     education : 'BE'
// }

// var obj2 ={...obj1};

// obj1.name = 'rahul'

// console.log(obj1,obj2);

