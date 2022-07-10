//Exercise 1-4 of Day 1
/*1.Write a single line comment which says, comments can
    make code readable
*/
//comments can make code readable

/*2.Write another single comment which says, Welcome to
    30DaysOfJavaScript
*/
//Welcome to 30DaysOfJavaScript

/*3.Write a multiline comment which says, comments can make
    code readable, easy to reuse and informative
*/
//comments can make code readable, easy to reuse and informative

/*4.Create a variable.js file and declare variables and assign
    string, boolean, undefined and null data types
*/
let fullName='Oyekammi Khodeejah Omowumi'
let age=25
let isAdult=true
let country
let pregnant=null


const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[%$@&#]/g,''))

let str=sentence.replace(/[%$@#%&]/g,'')
console.log(str)

function findMostRepeatedWord(str){
  let words = str.match(/\w+/g);
  console.log(words);

  let occurances ={};
    for (let word of words){
       if (occurances[word]){
       occurances[word]++;
       } else {
       occurances[word] = 1;
       }
    }
}

  let max = 0;
  let mostRepeatedWord = '';

  for (let word of words)
  {
    if (occurances[word] > max)
    {
      max = occurances[word];
      mostRepeatedWord = word;
    }
  }
  return mostRepeatedWord;

/*4.Calculate the total annual income of the person by extracting
    the numbers from the following text. 'He earns 5000 euro from
    salary per month, 10000 euro annual bonus, 15000 euro online
    courses per month.'
*/

//assign the string to a variable
let string1='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

//extract numbers from the string
let nums=string1.match(/\d+/g)
console.log(nums)

//salary
let salary=Number(nums[0])
console.log(salary)

//annual bonus
let annualBonus=parseInt(nums[1])
console.log(annualBonus)

//online courses
let onlineCourses=Number(nums[2])
console.log(onlineCourses)

//Annual income
let annualIncome=salary+annualBonus+onlineCourses
console.log(annualIncome)

//Or Another method
let totalAnnualIncome=Number(nums[0])+Number(nums[1])+Number(nums[2])
console.log(totalAnnualIncome)

