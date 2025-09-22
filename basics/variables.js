const accountId= 1234;  // not changeable
let accountEmail= "ananta@gmsil.com";
var accountPassword="12356";
accountCity="Bhubaneswar";
let accountStae;

// accountId=2;   Not allowed
accountEmail="nayak@gmail.com";
accountPassword="2222";
accountCity="ahmedabad";
console.log(accountId);

console.table([accountEmail,accountPassword,accountCity,accountStae]);

/*
Prefer not to use var bcoz of issue of block acope and function scope.
1.variable names are case sensitive a and A is different.
2.only letters,digits,underscore and $ is is allowed ,(not even space).
3.only letters,underscore or $ should be the first character.
4.Reserved words cannot be variabke name.

fullName -> camel case
full_name -> snake case
full-name -> kabab case
Fullname -> pascal case

var -> can be re-declared and updated. a global scope variable.
let -> can not be re-declared and updated. A block scope variable.
const -> can not be re-declared or updated , a block scope variable.

*/
// let a =10;
// {
//     let a =11;
//     console.log(a);
// }
// console.log(a);
// var a =10;
// {
//     var a =11;
//     console.log(a);
// }
// console.log(a);