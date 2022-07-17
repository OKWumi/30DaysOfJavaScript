//Exercise level 1 of Day 6
/*1.Iterate 0 to 10 using for loop, do the same using
    while and do while loop
*/
// For loop
for (let i = 0; i <= 10; i++) {
				console.log(i)
}

//While do loop
let i=0
while(i <= 10) {
				console.log(i)
				i++
}

//do whole loop
let iii=0 
do {
	console.log(iii)
	iii++
} while (iii <= 10)

/*2.Iterate 10 to 0 using for loop, do the same using
    while and do while loop
*/
for (let i = 10; i >= 0; i--) {
	console.log(i)
}

//While do loop
let ii=10
while(ii >= 0) {
	console.log(ii)
	ii--
}

//do whole loop
let i2=10 
do {
	console.log(i2)
	i2--
} while (i2 >= 0)

//Iterate 0 to n using for loop, let n=3
for(let i = 0; i <= 3; i++) {
	console.log(i)
}
/*4.Write a loop that makes the following pattern using
    console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
let a =''
for (let i = 0; i <= 7; i++){
	a += '#'
	console.log(a)
}

/*5.Use loop to print the following pattern:

    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
	5 x 5 = 25
	6 x 6 = 36
	7 x 7 = 49
	8 x 8 = 64
	9 x 9 = 81
	10 x 10 = 100
*/
for (let i = 0; i <= 10; i++) {
	console.log(`${i} * ${i} = ${i * i}`)
}

/*6.Using loop print the following pattern

    i    i^2   i^3
	0    0     0
	1    1     1
	2    4     8
	3    9     27
	4    16    64
	5    25    125
	6    36    216
	7    49    343
	8    64    512
	9    81    729
	10   100   1000
*/
for (let i = 0; i <= 10; i++) {
	console.log(i)
	console.log(`${i} ** 2 = ${i ** 2}`)
	console.log(`${i} ** 3 = ${i ** 3}`)
}

/*7.Use for loop to iterate from 0 to 100 and print
    only even numbers
*/

for (let i = 0; i <= 100; i++) {
	if (i % 2 === 0)  {
console.log(i)
	}
}		

/*8.Use for loop to iterate from 0 to  100 and print only
    odd numbers
*/
for (let i = 0; i <= 100; i++) {
	if (i % 2 != 0)  {
console.log(i)
	}
}		

/*9.Use for loop to iterate from 0 to 100 and print only
    prime numbers
*/
for (let i = 0; i <= 100; i++) {
	var notPrime = false;
	for (var j = 2; j <= (i - 1); j++){
		if (i % j === 0)
		{notPrime = true;}
	}
	if (notPrime === false)  
	console.log(i);
}
 
/*10.Use for loop to iterate from 0 to 100 and print the
     sum of all numbers.
*/
let sum = 0
for (let i = 0; i <= 100; i++) {
	sum += i
	console.log(sum)
}

/*11.Use for loop to iterate from 0 to 100 and print the
     sum of all evens and the sum of all odds.

    The sum of all evens from 0 to 100 is 2550. And the sum
    of all odds from 0 to 100 is 2500.
*/
let su = 0
let s = 0
for (let i = 0; i <= 100; i++) {
	if (i % 2 === 0)  {
		su += i
console.log(su)
	} else if (i % 2 != 0) {
		s += i
		console.log(s)
	}
}	

/*12.Use for loop to iterate from 0 to 100 and print the
     sum of all evens and the sum of all odds. Print sum\
	 of evens and sum of odds as array

    [2550, 2500]
*/
const newAr=[]
const newArr=[]
let m = 0
let mi = 0
for (let i = 0; i <= 100; i++) {
	if (i % 2 === 0)  {
		m += i
		newAr.push(m)
		console.log(newAr)

	} else if(i % 2 != 0) {
		mi += i
		newArr.push(mi)
		console.log(newArr)
	}
	
}
let lidexnewAr=newAr.length-1
let lidexnewArr=newArr.length-1
let arL=newAr[lidexnewAr]
let arrL=newArr[lidexnewArr]

console.log(`[${arL}, ${arrL}]`)

//13.Develop a small script which generate array of 5 random numbers
const array=[]
for (i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random()*5))
}
console.log(array)

//14.Develop a small script which generate array of 5 random numbers and the numbers must be unique
const array2=[]
for (i = 0; i < 6; i++) {
	let r = Math.floor(Math.random()*6)
	if (array2.indexOf(r) === -1) {
		array2.push(r)
	}
}
console.log(array2)

//15.Develop a small script which generate a six characters random id:
function gId(length) {
	var result = ''
	var cha = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
	var chaL = cha.length
	for (var i = 0; i < length; i++) {
	result += cha.charAt(Math.floor(Math.random() * chaL))
	}
	return result
}
console.log(gId(6))



