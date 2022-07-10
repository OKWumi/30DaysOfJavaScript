//exercise 1 of Day 3
/*Declare firstName, lastName, country, city, age, isMarried, year variable and
assign value to it and use the typeof operator to check different data types.
*/

let firstName='Khodeejah'
let lastName='Oyekanmi'
let country='Nigeria'
let age=2022
let isMarried=false
let year=2022

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

//2.Check if type of '10' is equal to 10
let num1='10'
console.log(num1)

//3.Check if parseInt('9.8') is equal to 10
let num2='9.8'
let numInt=parseInt(num2)
console.log(numInt)

/*4.Boolean value is either true or false.
    1.Write three JavaScript statement which provide truthy value.
*/
let fName='Ayo'
let isGraduated=true
let weight=90
console.log(fName,isGraduated,weight)

   //2.Write three JavaScript statement which provide falsy value.
let firName
let iMarried=''
let town=null
console.log(firName,iMarried,town)

/*5.Figure out the result of the following comparison expression first without using
console.log(). After you decide the result confirm it using console.log()
 4 > 3
 4 >= 3
 4 < 3
 4 <= 3
 4 == 4
 4 === 4
 4 != 4
 4 !== 4
 4 != '4'
 4 == '4'
 4 === '4'

 Find the length of python and jargon and make a falsy
 comparison statement.
*/ 
// 4 > 3
console.log(4>3)
// 4>=3
console.log(4>=3)
// 4<3
console.log(4<3)

// 4<=3
console.log(4<=3)

// 4==4
console.log(4==4)

// 4===4
console.log(4===4)

// 4!=4
console.log(4!=4)

// 4!==4
console.log(4!==4)

// 4!='4
console.log(4!='4')

// 4 == '4'
console.log(4 == '4')

// 4 === '4'
console.log( 4 === '4')

/*Find the length of python and jargon and make a falsy
 comparison statement.
*/
console.log('python'.length!='jargon'.length)

/*6.Figure out the result of the following expressions first
 without using console.log(). After you decide the result
 confirm it by using console.log()

 4 > 3 && 10 < 12
 4 > 3 && 10 > 12
 4 > 3 || 10 < 12
 4 > 3 || 10 > 12
 !(4 > 3)
 !(4 < 3)
 !(false)
 !(4 > 3 && 10 < 12)
 !(4 > 3 && 10 > 12)
 !(4 === '4')
 There is no 'on' in both dragon and python
*/
// 4 > 3 && 10 < 12
console.log(4 > 3 && 10 < 12)

// 4 > 3 || 10 < 12
console.log(4 > 3 || 10 < 12)

// 4 > 3 || 10 > 12
console.log(4 > 3 || 10 > 12)

// !(4 > 3)
console.log(!(4 > 3))

// !(4 < 3)
console.log(!(4 < 3))

// !(false)
console.log(!(false))

//!(4 > 3 && 10 < 12)
console.log(!(4 > 3 && 10 < 12))

// !(4 > 3 && 10 > 12)
console.log(!(4 > 3 && 10 > 12))

// !(4 === '4')
console.log(!(4 === '4'))

// There is no 'on' in both dragon and python
let word1='dragon'
console.log(word1.includes('on'))

let word2='python'
console.log(word2.includes('on'))

/*7.Use the Date object to do the following activities
   What is the year today?
   What is the month today as a number?
   What is the date today?
   What is the day today as a number?
   What is the hours now?
   What is the minutes now?
   Find out the numbers of seconds elapsed from January 1, 1970 to 
   now.
*/
const now=new Date()
//What is the year today?
console.log(now.getFullYear())

//What is the month today as a number?
console.log(now.getMonth())

//What is the date today?
console.log(now.getDate())

//What is the day today as a number?
console.log(now.getDay())

//What is the hours now?
console.log(now.getHours())

//What is the minutes now?
console.log(now.getMinutes)

//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime())
