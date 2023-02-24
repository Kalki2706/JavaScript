// let js = "amazing";
// if (js == "amazing") alert("JS is Fun!");

// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);

// Values & Variables

// console.log("Jonas");
// console.log(23);

// let firstName = "Bob";
// console.log(firstName);

// firstName = "Jonas";
// console.log(firstName);
// console.log(firstName);

// JS standard to write like this
// firstNamePerson - camelCase
// You can also write like first_name_person - it's used in ruby so Recommendation is use JS Standard
// $ and _ are allowed in JS

// let jonas_maltida = "JM";
// let $function = 27;

// let person = "Jonas";
// let PI = 3.1415; //You can use PI in uppercase 'cause it's convention in JS.

// You can't write like this:
// 3years = 3 year
// jonas&Matilda = "JM" //you can't use 'and' sign
// let function = 27;
// let new = 27; //new and fuction are reserved keywords
// let name = "Jonas" //it's also a keyword even if it did'nt give error just don't use it us firstName instead.
// let Person = "Jonas"; //don't use capital letter

// DISCRIPTIVE VARIABLE NAMES

// Write like this:-

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// Not like this:-

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// DATA TYPES IN JS

// There are two type of values in JS:- Objects & Primitives

// Object
// let me = {
//   name: "Jonas",
// };
// console.log(me);

// Primitive
// firstName = "Jonas";
// let age = 30;

// There are 7 Primitive data types

// The first 3 are most important one.

// 1. Numbber: Floating point numbers used for decimals and integers
// let age = 23;

// 2. String: Sequence of characters used for text
// let firstName = "Jonas";

// 3. Boolean: Logical type can only be true or false used for taking decisions
// let fullAge = true;

// 4 . Undefined: Value taken by a variable that is not yer defined ('empty value')
// let children;

// 5. Null: Also means 'empty value'

// 6. Symbol(ES2015): Value that is unique and cannot be changed [Not useful for now]

// 7. BigInt(ES2020): Larger integers tham t he Number type can hold

// *NOTE: JS has dynamic typing: We do not have to manually  define the value stored in a variable. Instead, data types are determined automatically.

// Type of comments

// Single line comment.
/* Multi
line 
comment*/
// shortcut for comments in VS code: "ctrl" + "/"

// Boolean value
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// typeof operator
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);
// console.log(javascriptIsFun);

// Undefined value

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// // Null value

// console.log(null);
// console.log(typeof null);
// The null type will show as a object but it's just a bug and it's kept by JS for some legacy reasons

// 3 different ways of declaring variables

// let keyword
let myJob = "Programmer";
console.log(myJob);

let mySkills = "Programmer";
console.log(mySkills);

// strict equality operator to show that different variables reference the same value.
console.log(myJob === mySkills);

// a mutation is the act of changing the properties of a value.
myJob = "Web Developer";
console.log(myJob);

// During mutation use let keyword
let age = 30;
age = 31;

console.log(age);

// Const Keyword
const birthYear = 1990;
console.log(birthYear);

// You can't change value of variable which used const keyword, it'll throw an error if you do, so.
// birthYear = 1991;

// You can't declare undefined variable to const.
// const job;

// *NOTE: You should use CONST keyword as much as you can

// Var Keyword
// You should avoid using this keyword

var job = "programmer";
job = "teacher";

// Not using keyword is terrible idea even JS will not give error but the variable will save as globalobject
lastName = "Schmedtmann";
console.log(lastName);
console.log(typeof lastName);
