//Exercise level 3 0f day 2
/*1.'Love is the best thing in this world. Some found their love and
   some are still looking for their love.' Count the number of word 
   love in this sentence.
*/
let string='Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern=/love/gi
console.log(string.match(pattern))

/*2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/
let string2='You cannot end a sentence with because because because is a conjunction'
let pattern2=/because/gi
console.log(string2.match(pattern2))

/*3.Clean the following text and find the most frequent word
    (hint, use replace and regular expressions).

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve
    %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as
    educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching
    m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s
    mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript
    &is al@so $the $resu@lt of &love& of tea&ching'
*/
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    
let str=sentence.replace(/[%$@#%&]/g,'')
console.log(str)

console.log(findMostRepeatedWord(str));

function findMostRepeatedWord(str)
{
  let words = str.match(/\w+/g);
  console.log(words);

  let occurances = {};

  for (let word of words)
  {
    if (occurances[word])
    {
      occurances[word]++;
    }
    else
    {
      occurances[word] = 1;
    }
  }

  console.log(occurances);

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
}
       
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
