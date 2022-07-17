//Exrcise level 2 of Day6
//1.Develop a small script which generate any number of characters random id:
function gN(length) {
    var result=''
    var cha= 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
    var chaL=cha.length
    for (i = 0; i < length; i++) {
        result += cha.charAt(Math.floor(Math.random()*chaL))
    }
    return result
}
console.log(gN(10))

//2.Write a script which generates a random hexadecimal number.
function gH(length) {
    var result= ''
    var cha='qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
    var chaL=char.length
    for (i = 0; i < 100; i++) {
        result += cha.charAt(Math.floor(Math.random()*charL))
    }
    return result
}
console.log(`#${gN(6)}`)

/*3.Write a script which generates a random rgb color number.

rgb(240,180,80)
*/
const f=Math.floor(Math.random()*256);
const h=Math.floor(Math.random()*256)
const l=Math.floor(Math.random()*256)
console.log(`rgb(${f},${l},${h})`)

/*4.Using the above countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
const nArray=[]
for (let i = 0; i <= countries.length; i++) {
				nArray.push(countries[i])
}
console.log(nArray)

/*5.Using the above countries array, create an array for countries length'.

[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
*/
const arr=[]
for (let i = 1; i < 2; i++) {
				arr.push(countries[0].length, countries[1].length, countries[2].length, countries[6].length, countries[4].length, countries[7].length, countries[6].length, countries[8].length, countries[8].length, countries[9].length, countries[10].length)
}
console.log(arr)

/*6.Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/

const alb=[countries[0], (countries[0].slice(0,3).toUpperCase()), countries[0].length]

const bol=[countries[1], countries[1].slice(0,3).toUpperCase(), countries[1].length]

const can=[countries[2], countries[2].slice(0,3).toUpperCase(), countries[2].length]

const den=[countries[3], countries[3].slice(0,3).toUpperCase(), countries[3].length]

const eth=[countries[4], countries[4].slice(0,3).toUpperCase(), countries[4].length]

const fin=[countries[5], countries[5].slice(0,3).toUpperCase(), countries[5].length]

const ger=[countries[6], countries[6].slice(0,3).toUpperCase(), countries[6].length]

const hun=[countries[7], countries[7].slice(0,3).toUpperCase(), countries[7].length]

const ire=[countries[8], countries[8].slice(0,3).toUpperCase(), countries[8].length]

const jap=[countries[9], countries[9].slice(0,3).toUpperCase(), countries[9].length]

const ken=[countries[10], countries[10].slice(0,3).toUpperCase(), countries[10].length]

const arrayOfArray=[[alb], [bol], [can], [den], [eth], [fin], [ger], [hun], [ire], [jap], [ken]]
console.log(arrayOfArray)

/*7.In above countries array, check if there is a country or countries containing the word 'land'.
    If there are countries containing 'land', print it as array. If there is no country containing
    the word 'land', print 'All these countries are without land'.

['Finland','Ireland', 'Iceland']
*/
if (countries[0].includes('land')) {
				console.log(`${countries[0]}`)
} else {
				console.log('No land in this country')
}
 
if (countries[1].includes('land')) {
				console.log(`${countries[1]}`)
} else {
				console.log('No land in this country')
}

if (countries[2].includes('land')) {
				console.log(`${countries[2]}`)
} else {
				console.log('No land in this country')
}

if (countries[3].includes('land')) {
				console.log(`${countries[3]}`)
} else {
				console.log('No land in this country')
}

if (countries[4].includes('land')) {
				console.log(`${countries[4]}`)
} else {
				console.log('No land in this country')
}
 
if (countries[5].includes('land')) {
				console.log(`${countries[5]}`)
} else {
				console.log('No land in this country')
}

if (countries[6].includes('land')) {
				console.log(`${countries[6]}`)
} else {
				console.log('No land in this country')
}
 
if (countries[7].includes('land')) {
				console.log(`${countries[7]}`)
} else {
				console.log('No land in this country')
}
 
if (countries[8].includes('land')) {
				console.log(`${countries[8]}`)
} else {
				console.log('No land in this country')
}
 
if (countries[9].includes('land')) {
				console.log(`${countries[9]}`)
} else {
				console.log('No land in this country')
}

if (countries[10].includes('land')) {
				console.log(`${countries[10]}`)
} else {
				console.log('No land in this country')
}

const array=[]
for (let i = 0; i < 1; i++) {
				array.push(countries[5], countries[8])
}
console.log(array)

/*8.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

['Albania', 'Bolivia','Ethiopia']
*/
const aray=[]
for (let i = 0; i < 1; i++) {
				aray.push(countries[0], countries[1], countries[4])
}
console.log(aray)

/*9.Using the above countries array, find the country containing the biggest number of characters.

    Ethiopia
*/
function lWord (cName)
{
    return cName.reduce (function(lname, countries )
    {
        return lname.length > countries.length
        ? lname
        : countries
    } , "")
}
console.log(lWord(countries))

/*10.Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya']
*/
const ary=[]
for (let i = 0; i < 1; i++) {
				ary.push(countries[9], countries[10])
}
console.log(ary)

//11.Find the longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

  function lWord (cName)
  {
      return cName.reduce (function(lname, webTechs )
      {
          return lname.length > webTechs.length
          ? lname
          : webTechs
      } , "")
  }
  console.log(lWord(webTechs))

/*12.Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/
const html=[webTechs[0], webTechs[0].length]
const css=[webTechs[1], webTechs[1].length]
const JavaScript=[webTechs[2], webTechs[2].length]
const react=[webTechs[3], webTechs[3].length]
const redux=[webTechs[4], webTechs[4].length]
const node=[webTechs[5], webTechs[5].length]
const mongobd=[webTechs[6], webTechs[6].length]

console.log([html, css, JavaScript, react, redux, node, mongobd])

/*13.An application created using MongoDB, Express, React and Node is called a MERN stack app.
     Create the acronym MERN by using the array mernStack
*/
const nA = []
for (const MERN of mernStack) {
    nA.push(MERN[0])
}
console.log(nA)

/*14.Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express",
    "MongoDB"] using a for loop or for of loop and print out the items.
*/
let newA = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express",
"MongoDB"]

for (const web of newA) {
    console.log(web)
}

/*15.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using
     loop without using a reverse method.
*/
const fruit = ['banana', 'orange', 'mango', 'lemon']
console.log(fruit.sort())

/*16.Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
 
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
console.log(fullStack[0] + fullStack[1])






 