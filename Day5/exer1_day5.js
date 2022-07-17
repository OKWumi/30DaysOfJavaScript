//Exercise level 1 of day 5
//1.Declare an empty array;
const skills=new Array()
console.log(skills)
//2.Declare an array with more than 5 number of elements
const list=[
'meat',
'milk',
'seasonings',
'conflakes',
'sugar',
'oil',
'beverages'
]

//3.Find the length of your array
console.log(list.length)

/*4.Get the first item, the middle item and the last item
    of the array
*/
//first item
console.log(list[0])
//middle item
console.log(list[3])
//last item
let lastItem=list.length-1
console.log(list[lastItem])

/*5.Declare an array called mixedDataTypes, put different
    data types in the array and find the length of the
	array. The array size should be greater than 5
*/
const mixedDataTypes=[
				'Oyekanmi',
				'Ayotunde',
				25,
				true,
				{ Country:'Nigeria',Country2:'Canada' },
				{ State:['Osun','Oyo']	}
]
console.log(mixedDataTypes.length)

/*6.Declare an array variable name itCompanies and assign
    initial values Facebook, Google, Microsoft, Apple,
	IBM, Oracle and Amazon
*/
const itCompanies=[
				'Facebook',
				'Google',
				'Microsoft',
				'Apple',
				'IBM',
				'Oracle',
				'and Amazon'
]

//7.Print the array using console.log()
console.log(itCompanies)

//8.Print the number of companies in the array
console.log(itCompanies.length)

//9.Print the first company, middle and last company
let firstCompany=itCompanies[0]
console.log(firstCompany)

let middleCompany=itCompanies[3]
console.log(middleCompany)

let lastCompany=itCompanies.length-1
console.log(itCompanies[lastCompany])

//10.Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

/*11.Change each company name to uppercase one by one
     and print them out
*/
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

/*12.Print the array like as a sentence: Facebook,
     Google, Microsoft, Apple, IBM,Oracle and Amazon are
	 big IT companies.
*/
let sentence=itCompanies+' '+'are'+' '+'big'+' '+'IT'+' '+'companies.'
console.log(sentence)

/*13.Check if a certain company exists in the itCompanies
     array. If it exist return the company else return
	 a company is not found
*/
let chrome=itCompanies.indexOf('chrome')
if(chrome === -1){
				console.log('A company is not found')
}else{
				console.log('Chrome')
}

/*14.Filter out companies which have more than one 'o'
     without the filter method
*/
console.log(itCompanies[0].includes('oo'))
console.log(itCompanies[1].includes('oo'))
console.log(itCompanies[2].includes('oo'))
console.log(itCompanies[3].includes('oo'))
console.log(itCompanies[4].includes('oo'))
console.log(itCompanies[5].includes('oo'))
console.log(itCompanies[6].includes('oo'))

//15.Sort the array using sort() method
console.log(itCompanies.sort())

//16.Reverse the array using reverse() method
console.log(itCompanies.reverse())

//17.Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))

//18.Slice out the last 3 companies from the array
console.log(itCompanies.slice(4,7))

//19.Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3,4))

//20.Remove the first IT company from the array
console.log(itCompanies.shift())

//21.Remove the middle IT company or companies from the array
console.log(itCompanies.splice(3,1))

//22.Remove the last IT company from the array
console.log(itCompanies.pop())

//23.Remove all IT companies
console.log(itCompanies.splice())

