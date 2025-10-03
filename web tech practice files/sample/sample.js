//Named Function
//  function add(a,b){
//     console.log(a+b)
// }
// add(5,10)

// Anonymous Function
// let x =function (a,b){
//     console.log(a+b)
// }
// x(10,5)

//Arrow Function with Implicit return
// let a = (a,b)=>a+b ;
// console.log(a(5,10));

//Arrow Function with Explicit return
// let a = (a,b)=>{
//     console.log(`a value is ${a}`)  //--> String interpelation
//     console.log(`a value is ${b}`)
//     return a+b
// } ;
// console.log(a(5,10));

//Immediate Invoke Function Expression (IIFE)
// let x =(function (a,b){
//     console.log(a+b)
// })(5,10) //or //}(5,10))
//  (5,2) ERROR LINE -- we can call IIFE only once after decalration

// Function With Expression
// let x =(function (a,b){
//     console.log(a+b)
// })
// x(5,10) //or //});x(5,10)
//ERROR LINE --- }) x(5,10)

//Higher Order Function ----- //Callback Function
// Example 1 :
// function higherOderFunction(callback){
//     console.log("HIGHER ORDER FUNCTIION 😁");
//     callback();
// }
// function callbackFunction(){
//     console.log("CALLBACK FUNCTION 😜");
// }
// higherOderFunction(callbackFunction);

//Example 2 :
// function higherOderFunction(a,callback){
//     console.log(a,callback);
//     console.log("HIGHER ORDER FUNCTIION 😁");
//     let x= callback(a);
//     console.log(`${x}hello`)
// }
// function callbackFunction(a){
//     console.log("CALLBACK FUNCTION 😜");
//     console.log(a)
//     let c = a+5;
//     return c;
// }
// higherOderFunction(5,callbackFunction);

//Example 3 :
// function getCapture(camera){
//     camera();
// }
// let callback = function(){
//     console.log('cannon');
// }
// getCapture(callback);
//  H.O.F      CB.F

//Pure Function
// function sum(a,b){
//     console.log(a,b)
//     return a+b;
// } //sum(5,10)
// console.log(sum(5,10))

//Impure Function
// let x = Number(prompt("Enter any value"));
// console.log(typeof(x))
// function sum(a,b){
//     console.log(a)
//     console.log(b)
//     console.log(x)
//     return a+b+x;
// }
// console.log(sum(5,10))

//Default Parameter
// function sum(a,b,c=2){ //c is default parameter
//     return a+b+c
// }
// console.log(sum(5,10))
// console.log(sum(5,10,5)) // argument given value have higher priority

//Argument Object
// let x = function (){
//     return arguments; // --- Argument object is an array like object
// }
// console.log(x(1,2,3,4,5,6));

//Closure  -- Nested Function
// var a = 10;
// function outerMostFunction(){
//     let b = 20;
//     console.log("OUTER FUNCTION")
//     console.log(a);

//     function innerFunction(){
//         var c = 30;
//         console.log("INNER FUNCTIION")
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         function innerMostFunction(){
//             var c = 40;
//             console.log("INNER MOST FUNCTIION")
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }innerMostFunction()
//         // console.log(c);------------
//     }innerFunction()
// }outerMostFunction()

//Constructor Function
// function Student(name,age){
//     this.name = name;
//     this.age=age;
// }
// let s1 =  new Student("Vignesh",23);
// let s2 = new Student("Sid",22);
// console.log(s1,s2)

//Arrays
// Map method
// let arr = [10,20,30,40,50,60,70,80,90];
// let a = arr.map((value,index,array)=>{
//     console.log(value)
//     console.log(index)
//     console.log(array)
// })
//  console.log(arr.slice(1))
// console.log(arr.slice(1,2))
// console.log(arr.splice(-5))
// console.log(arr.slice(-5,-3))
//  console.log(arr.splice(1,3,4))
// console.log(arr.splice(-1))
//  console.log(arr)
//Rest Parameter
// function demo(a,b,...s){
//     console.log(a)
//     console.log(b)
// console.log(s)
// }
// demo(1,2,3,4,5)

//Spread Operator
// let arr=[1,3,5,7,9];
// let x = [...arr];
// console.log(x)
// console.log(arr)

// let arr = [1,2,3,4,5,6,7,8];
// let spreadedArray=[...arr];
// spreadedArray.splice(1,4);
// console.log(spreadedArray);
// console.log(arr)

//Object ----------------------------------------------------------------------
// var user={}; //Declaring an object
// console.log(user)
// user.name='dinesh'; //Inserting  object propety using DOT NOTATION
// user["age"]=24; //Inserting object propety using BRACKET NOTATION
// console.log(user)

// let persons = {
//     name:'vignesh',
//     age:23,
//     friends:{
//         1:'dinesh',
//         2:'tilak',
//         3:'bla blas bla'
//     }
// }
// console.log(persons); //Object as an ARGUMENT

// let person = {//object creation
//     name:'vignesh',
//     age:23,
// }
// console.log(person);
// console.log(person.name); //Returning object propety using DOT NOTATION
// console.log(person["name"]); //Returning object propety using BRACKET NOTATION

// person.weight='72 KG'; //Inserting  object propety using DOT NOTATION
// console.log(person);
// person["height"]='159 CM'; //Inserting object propety using BRACKET NOTATION
// console.log(person);

// person.weight='77 KG'; //Re-Initializing object propety using DOT NOTATION
// console.log(person);
// person["height"]='5.7 Feet'; //Re-Initializing object propety using BRACKET NOTATION
// console.log(person);

// delete person.weight;//Deleting object propety using DOT NOTATION
// console.log(person);
// delete person['height'];//Deleting object propety using DOT NOTATION
// console.log(person);

//------------Array Of OBJECTS----------
// let obj = [{
//     name:'Vicky',
//     age:23,
// },{
//     name:'tilak'
// },{
//     name:'t'
// }]
// console.log(obj)
// console.log(obj[1])
// obj.map((val)=>console.log(val) );

//Object Methods
// let obj = [{
//     name:'Vignesh',
//     age:23,
//     height:5.7,
//     weight: "75 KG"
// },{
//     name:'dinesh',
//     age:23,
//     height:5.8,
//     weight: "74KG"
// }]
// let x =Object.entries(obj);
// x.map((val)=> console.log(x))
// console.log(x); //Object.entries
// console.log(obj)
