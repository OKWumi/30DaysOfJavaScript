//Exercise level 3 of Day 5
/*The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
ages.sort()
let min=ages[0]
console.log(min)
let max=ages.length-1
console.log(ages[max])

/*Find the median age(one middle item or two middle items divided by two)
*/
ages.length//10
let median=(ages[4]+ages[5])/2
console.log(median)

//Find the range of the ages(max minus min)
let range=ages[max]-ages[0]
console.log(range)

/*Find the average age(all items divided by number of items)
*/
let aveAge=(ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/ages.length
console.log(aveAge)

/*Compare the value of (min - average) and (max - average), use abs() method
*/
let minA=min-aveAge
let maxA=max-aveAge
console.log(Math.abs(minA-maxA))

