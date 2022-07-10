//Exercise level2 of Day 4
/*1.Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let studentS=prompt('Enter Score:')
if (studentS>=80){
				console.log('Grade A')
} else if(studentS>=70 && studentS<80){
				console.log('Grade B')
} else if(studentS>=60 && studentS<70 ){
				console.log('Grade C')
} else if(studentS>=50 && studentS<60){
				console.log('Grade D')
} else {
				console.log('Grade F')
}

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
let season=prompt('Enter present Month:')
let month=season.toLowerCase()
switch(month){
				case'january':
				console.log('The season is Winter')
				break
				case 'february':
				console.log('The season is Winter')
				break
				case'march':
				console.log('The season is Spring')
				break
				case'april':
				console.log('The season is Spring')
				break
				case'may':
				console.log('The season is Spring')
				break
				case'june,july,august':
				console.log('The season is Summer')
				break
				case'july':
				console.log('The season is Summer')
				break
				case'august':
				console.log('The season is Summer')
				break
				case'september':
				console.log('The season is Autumn')
				break
				case'october':
				console.log('The season is Autumn')
				break
				case'november':
				console.log('The season is Autumn')
				break
				default:
				console.log('It is december ')
}

/*Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/
let day=prompt('What is the day today?')
let pDay=day.toLowerCase()
switch(day){
       case('monday'):
       console.log(`${day} is a working day`)
       break
       case('tuesday'):
       console.log(`${day} is a working day`)
       break
	   case('wednesday'):
       console.log(`${day} is a working day`)
       break
	   case('thursday'):
       console.log(`${day} is a working day`)
       break
	   case('friday'):
       console.log(`${day} is a week day day`)
       break
	   case('saturday'):
       console.log(`${day} is a weekend`)
       break
	   case('sunday'):
       console.log(`${day} is a weekend`)
       break      
}
