// Exercise level 3 of day 3
/*Create a human readable time format using the Date time
  object. The hour and the minute should be all the time
  two digits(7 hours should be 07 and 5 minutes
    should be 05 )
    YYY-MM-DD HH:mm eg. 2020-01-02 07:05
*/
let $$now=new Date()
let yyyy=$$now.getFullYear()
let mM=$$now.getMonth()
let dd=$$now.getDate()
let hh=$$now.getHours()
let mm=$$now.getMinutes()
console.log(yyyy +'-'+'0'+mM+'-'+dd+' '+'0'+hh+':'+mm)