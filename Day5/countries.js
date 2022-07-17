/*1.Create a separate countries.js file and store the
    countries array in to this file,
*/
type: "module"
export const countries=['Nigeria', 'Canada', 'USA', 'Cairo', 'Ghana', 'Mexico', 'Paris', 'New York', 'Pakistan', 'Germany', 'Iran']
console.log(countries)

/*4.In countries array check if 'Ethiopia' exists in the
    array if it exists print 'ETHIOPIA'. If it does not
    exist add to the countries list.
*/
let ethiopia=countries.includes('Ethiopia')
if (ethiopia){
    console.log('ETHIOPIA')
} else {
    console.log(countries.push('Ethiopia'))
}
  console.log(countries)

//Exercise level 3 of day 5
//1.Slice the first ten countries from the countries array
console.log(countries.slice(0,10))

//2.Find the middle country(ies) in the countries array
countries.length//11
console.log(countries[5])

/*3.Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
*/
const countries1=[countries[0], countries[1], countries[2], countries[3], countries[4], countries[5]]
console.log(countries1)

const countries2=[countries[6], countries[7], countries[8], countries[9], countries[10]]
console.log(countries2)