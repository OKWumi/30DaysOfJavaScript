//Exercise level 1 of day 4
/*1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/
let yourAge=prompt('Enter your age')
let notAdult=18-yourAge
yourAge>=18
  ? console.log(`You are old enough to drive.`)
  : console.log(`You are left with ${notAdult} years to drive.`)
  
/*2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.
*/
let myAge=prompt('Enter your Age:')
let $yourAge=prompt('Enter your Age:')
let iAmOlder=myAge-$yourAge
let youAreOlder=$yourAge-myAge
if(myAge>$yourAge){
				console.log(`I am ${iAmOlder} older than you`)
}else{
				console.log(`You are ${youAreOlder} older than me`)
}

/*3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

 :-using if else
 :-ternary operator.
  let a = 4
  let b = 3
*/
let a=5
let b=7
// Using if else
if (a>b){
				console.log(`a is greater than b`)
}else{
				console.log(`a is less than b`)
}
// Using ternary operator
a>b
  ? console.log(`a is greater than b`)
  : console.log(`a is less than b`)
  
/*4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
*/
let num1=prompt('Enter number:')
if (num1 % 2 == 0){
				console.log('num1 is an even number')
}else{
				console.log('num1 is an odd num')
}
