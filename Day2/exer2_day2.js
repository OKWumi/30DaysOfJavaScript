//Exercise level 2 of Day 2
/*1.Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
*/
console.log("There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

/*2.Using console.log() print out the following quote by Mother Teresa:

"Love is not patronizing and charity"
*/
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out ")

/*3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
*/
let num='10'
let numInt=parseInt(num)
console.log(numInt)

/*4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
*/
let num1='9.81'
let numFloat=parseFloat(num1)
console.log(numFloat)
console.log(Math.round(9.81))

//5.Check if 'on' is found in both python and jargon
let string1='python and jargon'
console.log(string1.includes('on'))

/*6.I hope this course is not full of jargon. Check if jargon is in the sentence.
*/
let string2='I hope this course is not full of jargon'
console.log(string2.includes('jargon'))

//7.Generate a random number between 0 and 100 inclusively.
const randNum=Math.random()
let numBtwZeroAnd100=randNum*101
console.log(numBtwZeroAnd100)

//8.Generate a random number between 50 and 100 inclusively.
let numBtw50And100=Math.ceil(numBtwZeroAnd100)
console.log(numBtw50And100)

//9.Generate a random number between 0 and 255 inclusively.
let num4=Math.floor(Math.random()*256)
console.log(num4)

//10.Access the 'JavaScript' string characters using a random number.
let string3='JavaScript'
let sixthLetter=string3[6]
console.log(sixthLetter)

/*11.Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
console.log('1\t1\t1\t1\t1\t')
console.log('2\t1\t2\t4\t8\t')
console.log('3\t1\t3\t9\t27\t')
console.log('4\t1\t4\t16\t64\t')
console.log('5\t1\t5\t25\t125\t')

/*12.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/
let string4='You can not end a sttatement with because because because is a conjunction'
console.log(string4.substr(33,24))

