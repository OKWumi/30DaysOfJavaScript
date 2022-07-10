//Exercise level 3 of Day 4
/*1.Write a program which tells the number of days in a
    month.
      Enter a month: January
      January has 31 days.

      Enter a month: JANUARY
      January has 31 day

      Enter a month: February
      February has 28 days.

      Enter a month: FEbruary
      February has 28 days.
*/
let $month=prompt('Enter a month')
let month=$month.toLowerCase()
switch (month){
  case 'january':
    console.log(`${month} has 31 days`)
  break
  case 'february':
    console.log(`${month} has 28 days`)
  break
  case 'march':
    console.log(`${month} has 31 days`)
  break
  case 'april':
    console.log(`${month} has 30 days`)
  break
  case 'may':
    console.log(`${month} has 31 days`)
  break
  case 'june':
    console.log(`${month} has 30 days`)
  break
  case 'july':
    console.log(`${month} has 31 days`)
  break
  case 'august':
    console.log(`${month} has 31 days`)
  break
  case 'september':
    console.log(`${month} has 30 days`)
  break
  case 'october':
    console.log(`${month} has 30 days`)
  break
  case 'november':
    console.log(`${month} has 31 days`)
  break
  case 'december':
    console.log(`${month} has 30 days`)
  break
  default:
    console.log(`${month} is not a month`)
}

/*2.Write a program which tells the number of days in a
    month, now consider leap year.
*/
let month1=prompt('Enter a month')
let month2=month1.toLowerCase()
switch (month2){
  case 'january':
    console.log(`${month2} has 31 days`)
  break
  case 'february':
    console.log(`${month2} has 29 days (leap year)`)
  break
  case 'march':
    console.log(`${month2} has 31 days`)
  break
  case 'april':
    console.log(`${month2} has 30 days`)
  break
  case 'may':
    console.log(`${month2} has 31 days`)
  break
  case 'june':
    console.log(`${month2} has 30 days`)
  break
  case 'july':
    console.log(`${month2} has 31 days`)
  break
  case 'august':
    console.log(`${month2} has 31 days`)
  break
  case 'september':
    console.log(`${month2} has 30 days`)
  break
  case 'october':
    console.log(`${month2} has 30 days`)
  break
  case 'november':
    console.log(`${month2} has 31 days`)
  break
  case 'december':
    console.log(`${month2} has 30 days`)
  break
  default:
    console.log(`${month2} is not a month`)
}
