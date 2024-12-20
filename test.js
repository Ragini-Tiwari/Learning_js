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
  const name= "ragii"
  const repoCount = 10
  //console.log(name + repoCount+"Value");
 console.log(`hello my name is ${name} and my repo count is ${repoCount}`);