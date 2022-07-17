//Exercise level 2 of Day 5
/*2.First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
13
*/

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words=text.match(/\w+/g)
console.log(words)
console.log(words.length)

/*3.In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//add 'Meat' in the beginning of your shopping cart
shoppingCart.unshift('Meat')
console.log(shoppingCart)

//add Sugar at the end of you shopping cart
shoppingCart.push('Sugar')
console.log(shoppingCart)

//remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1)
console.log(shoppingCart)

//modify Tea to 'Gereen Tea'
shoppingCart[2]='Green Tea'
console.log(shoppingCart)

/*6.Concatenate the following two variables and store it
    in a fullStack variable.

      const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
      const backEnd = ['Node','Express', 'MongoDB']

      console.log(fullStack)
 
      ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)

