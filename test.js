//console.log("ragini");
//const accountId = 1212121
//let accountEmail = "raginitiwari.com"
//var accountPassword ="1234"
//accountCity = "delhi"
//let accountState ;

//accountId = 2 // not allowed

//accountEmail = "ragini.com"
//accountPassword ="121212"
//accountCity =" noida"

//console.log(accountId);

// prefer not to use var bcoz of issue in block scope and functional scope 

//console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

// 2nd video : data types 
// javascript engine is hide in browser 

//"use strict "; // treat all js code as newer version 
// alert(4+4) // we are using nodejs , not browser
 //let name ="ragini"
 //let age = 18 
 //let isLoggedInt = false
 //let state;

 // number => 2 to power 53 
 // bigint
 //string => ""
 // boolean => true/false
// null => standalone value
// ***null is an object*** 
// undefined => 
// symbol => unique

//object

//console.log(typeof"ragini"); // string 
//console.log(typeof undefined); // undefined
//console.log(typeof null); // object

//---------------------------------------------------------------
// 03-conversion and operations in javascript 

//let score = 33
//console.log(typeof score);

//let valueInNumber = Number(score)
//console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// 1 => true; 0 => false
// "" => false
//"ragini" => true

// convert number to string 
//let someNumber = 22
//let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

//----------------------------------------------------
// operations :
//let value = 3
//let negValue = -value
//console.log(negValue);
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2%2);

//-------------- Comparisons-------------------------------------------
//=== ( check value as well as data type ) (strict check)

//------------------data types-----------------------------------------
//js is dynamically typed language 
//1. primitive -call by value

  //    String, number, boolean, null, undefined, symbol, bigint 

//2.  non primitive - call by refrence 
  //    Array, objects, function 

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // memory - two types of 5memories : 
  // Stack (Primitive) (WILL RECEIVE COPY OF VALUE )
  // Heap ( Non Primitive)( WILL RECEIVE REFRENCE OF VALUE)

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // STRINGS
  //string interopolation 
  //const name= "ragii"
  //const repoCount = 10
  //console.log(name + repoCount+"Value");
 //console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

 //+++++++++++++ nums & maths ++++++++++++++++++++++++++++

  // console.log(Math.random()* (max-min +1)) + min)

  //++++++++++Dates+++++++++++++++++++++++++++++

  // Javascript Date objects represents a single moment in time in a platform-independent format.
  //Date encapsulate an integral number that reprents milliseconds since the midnight at the begining of january 1, 1970, UTC
  // TC39 - ORGANIZATION 
  // Date is an object 
  // month is start with 0 in javascript . bcoz of array 
  //mmddyy(monthdateyear)

  //ARRAY ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   // js arrays are resizable 
   // js array are not associated array so , array elemts can't be accessed using arbotrary string as indexes.
   // zero indexed , 
   // js array-copy-operation craete shallow copies.(all standard built-in copy operations with any js objeccts creates shallow copies , rather than deep copies) 
   //shallow copies- is a copy whose properties share the same refrences.
   // deep copies -  is a copy whose properties do not share the same refrence 
   // slice, splice 
    // flat(), array.of , isarray , from 
    
    // objects+++++++++++++++++++++++++++++++++++++
    // we can declare object as two ways : 1. literals 2. constructor 
    // singleton-we create object using constructor then it called singleton bcoz we can notn clraete therir multiple instance .(object.craete)
    // 1. object literals :
     // we can define key as well as value in object literals 

    // const mySym = Symbol("ke1")
    //const JsUser = {
      //name:"ragi",
      //"full name": "tiwari",
      //[mySym] : "key1",
      //age:18,
      //location:"delhi",
      //email:"ragi@gmail.com",
      //isLoggedIn:false,
    //}

    //console.log(JsUser.email) // most popular way to access an object 
    //console.log(JsUser["email"])// second way to accees an object which can take access more than one element
    //console.log(JsUser[mySym]) // important for interview 
    // symbol, freeze 

    // constructor object 
    // const tinderUser = new Object() // singleton object 
    // const tinderUser = {} // non singleton object 
    // channing , assign(), array of object , entries, distructuring 
    // object sestructure 
    //const {courseInstructor: instruct} = course
    //console.log(intruct);

    //+++++++++APIs+++++++++++++++++++++++++++++++++++++++++++++++++
    //++++++++++++JAVASCRIPT FUNCTIONS+++++++++++++++++++++++++++++
     
     //function sayName(){
      //console.log("R");
      //console.log("A");
      //console.log("G");
      //console.log("I");
     //}
     //sayName // refrence 
     //sayName() // execution 

     //function add(num1, num2){ // thats called parameter means declaration time it call parameter 
      //console.log(num1 +num2);
     //}
     //add(3, 8) // thats called argument means execution time we pass argument 
    //const result = add(3,4)
    //console.log("result:",result);
    //return num1 + num2

    // rest operator ( ... ) 
    // scopes+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //closure, DOM, hoesting 

    //---interesting concept- / two way to write same way but in add two we hold value using addtwo--------------------
    //addone(2)
    //function addone(num){
      //return num+1
    //}
    //addTwo(3)
    //const addTwo=function(num){
     // return num+2
    //}

    //+++++++++++++Arrow function and this keyword+++++++++++++++++++++++++++++++++++++++
    // this keyword = shows current context
    // arrow function me this directly use nhi hota hai 
     // browser ke andar  global object window hai and ide(node) me empty object  

//function one(){
  //let username ="ragi"
  //console.log(this.username);
//}
//one()
// this - it  only works in object not in between functions 
// implicit and explicit return 
//const addTwo= (num1, num2) =>{
  //return num1 + num2
//}
//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)

//+++++++++++++++++++Immediately Invoked Function Expressions(IIFE)++++++++++++++++
// global scope ke pollution se problem hoti hai bhut baar usase bachne ke liye iife ka use krte hai 
// named IIFE And simple IIFE

//++++++++++++++++Execution Context and callstack+++++++++++++++++++++++++
//1.Global execution context 2. function execution context 3. eval execution context
// i)global execution ii) memory creation phase iii) execution phase -- (functions) new variable environment+execution thread
 
//+++++++++++control-flow++++++++++++++++++++++++++++++++++++++++++++++++++
//nullish coalescing operator(??): null , undefined
// truthy & falsy 
// falsy value - false, 0, -0, bigint, 0n, "", null, undefined, nan
//truthy value - "0", "false", " ", [], {}, function(){}-empty function
// terniary  operator - condition ? true : false 

// loops+++++++++++++++++++++++++++++++++++++++++++++++++++
 // maps+++++++++++++++++++++++++++++++++++++++++++++++++++
 //foreach+++++++++++++++++++++++++++++++++++++++++++++++++
  // callback function - nameless 
  // filter - it also take callback func 
// array.reduce() -------- accumulator= empty variable  

// DOM(document object model)
// innerText, textContent, innerHTML 
// querySelector, querySelectorAll,  
  //Dom related four projects : 1. color switcher 2. BMI calculator 3. Guess a number 4. Digital Clock
  // DOM Manupulation :
  // HTML Events , eventlistener, attachEvent, eventObject
  // in javascript events run sequentially
  //jQuey-on 
  // type, timestamp, preventDefault, target, toElement, srcElement, currentTarget,
  //clientX, clientY, screenX, screenY
  //altKey, cltKey,shiftKey, keyCode
  //event propagation : eventcapturing(top to bottom), eventbubbling(bottom to top)
  // stopPropagation()
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //async code : 
  // javascript is synchronous and single threaded 
  // execution context - execute one line of code at a time - each operation waits for the last one to complete before executing .
  // blocking code - block the flow of program - read file sync
  // non blocking code - does not block excution - read file async 
  //setTimeout , set interval , clear timeout, cleat interval, DOM API, WEB APi,fetch(), register callback ,  task queue, priority queue, 
  // javascript by default synchronous h but by using web apis and setinterval, set timeout we can make it as ashynchrounous

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //xml httprequest(XHR) objects are used to interact with servers. we can retrieve data from url without having to do a full page refresh. it is used heavily in AJAX Programming. Despite its name it can be used to retrieve any type of data, not just XML.
  //Asynchronous javascript and xml (AJAX) is not a technology in itself , but rather an approach to using a number of existing technologies together, including html, css, js, DOM, XML,XSLT .
  //ReadyState Property : it returns the state an xmlhttprequest client is in . an xhr client exists in one of the following states:
  // 1. 0 - unsent -- client has been created. open() not called yet.
  // 2. 1 - OPENED -- open() has beed called.
  // 3. 2 - HEADERS_RECEIVED -- send() has been called, and headers and status are available . 
  // 4. 3 - LOADING -- Downloading: responsetext holds partial data.
  // 5. 4 - DONE -- The operation is complete.