// Exercise level 3 of Day 6
//1.Copy countries array(Avoid mutation)
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

/*2.Arrays are mutable. Create a copy of array which does not modify the original.
    Sort the copied array and store in a variable sortedCountries
*/
const cCountries = []
for (let i = 0; i <= countries.length; i++) {
    cCountries.push(countries[i])
}
console.log(cCountries)

var sortedCountries = cCountries.sort()
console.log(sortedCountries)

//3.Sort the webTechs array and mernStack array
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
console.log(webTechs.sort())
console.log(mernStack.sort())

/*4.Extract all the countries contain the word 'land' from the countries array
    and print it as array
*/
const nArr=[]
for (let i=0; i< 1; i++) {
  nArr.push(countries[5], countries[8])
}
console.log(nArr)

//5.Find the country containing the hightest number of characters in the countries array
function hC (cName) {
  return cName.reduce (function(lname, countries) {
    return lname.length > countries.length
      ? lname
      : countries
  }, "")
}
console.log(hC(countries))

/*6.Extract all the countries contain the word 'land' from the countries array and 
    print it as array
*/
const nAr=[]
for (let i=0; i< 1; i++) {
  nArr.push(countries[5], countries[8])
}
console.log(nAr)

/*7.Extract all the countries containing only four characters from the countries array and
    print it as array
*/
function c4 (cName) {
  return cName.reduce (function(lname, countries) {
    return lname.length = 4
      ? lname
      : countries
  }, "")
}
console.log(c4(countries))

/*8.Extract all the countries containing two or more words from the countries array and print it as array
*/
const wArray = []
for (i = 0; i < 1; i++) {
				wArray.push(countries[3], countries[5], countries[6], countries[8])
}
console.log(wArray)

/*9.Reverse the countries array and capitalize each country and stored it as an array
*/
countries.reverse()
const cCountriesS = []
for (i = 0; i < countries.length; i++) {
  cCountriesS.push(countries[i].toUpperCase())
}
console.log(cCountriesS)
