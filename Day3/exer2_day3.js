/*1.Write a script that prompt the user to enter base and height
  of the triangle and calculate an area of a triangle
  (area = 0.5 x b x h).
    Enter base: 20
    Enter height: 5
    The area of the triangle is 100
*/
let base=prompt('Enter base');
let height=prompt('Enter height');
let areaOfTriangle=0.5*base*height
console.log(areaOfTriangle)

/*2.Write a script that prompt the user to enter side a, side b,
  and side c of the triangle and and calculate the perimeter of
  triangle (perimeter = a + b + c)
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
*/
let sideA=prompt('Enter sideA')
let sideB=prompt('Enter sideB')
let sideC=prompt('Enter sideC')
let perimeterOfTriangle=sideA+sideB+sideC
console.log(perimeter)

/*3.Get length and width using prompt and calculate an area of
  rectangle (area = length x width) and the perimeter of
  rectangle (perimeter = 2 x (length + width))
*/
// Area of rectangle
let length=prompt('Enter lenght')
let width=prompt('Enter width')
let areaOfRectangle=length*width
console.log(areaOfRectangle)

// Perimeter of rectangle
let perimeterOfRectangle=2*(length*width)
console.log(perimeterOfRectangle)

/*4.Get radius using prompt and calculate the area of a
  circle (area = pi x r x r) and circumference of a
  circle(c = 2 x pi x r) where pi = 3.14.
*/
// Area of a circlelet radius=prompt('Enter number')
const pi=3.1417
let areaOfCircle=pi*radius*radius
console.log(areaOfCircle)

// Circumference of a circle
let circumferenceOfCircle=2*pi*radius
console.log(circumferenceOfCircle)

//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
// y=mx+c where m=slope, mx=intercept
//x-intercept,y=0
let y=0
let x=(y+2)/2
console.log(x)

//y-intercept,x=0
let xi=0
let yi=(2*xi)-2
console.log(yi)

//slope,(dy)/(dx) and x=(1,0), y=(0,-2)
let slope=(y-yi)/(x-xi)
console.log(slope)

/*6.Slope is m = (y2-y1)/(x2-x1).
    Find the slope between point (2, 2) and point(6,10)
*/
//(2,2)=(x1,y1),(6,10)=(x2,y2)let y_2=10
let y_1=2
let x_2=6
let x_1=2
let slope_m=(y_2-y_1)/(x_2-x_1)
console.log(slope_m)

//7.Compare the slope of above two questions.
console.log(slope==slope_m)

/*8.Calculate the value of y (y = x2 + 6x + 9). Try to
    use different x values and figure out at what x value y is 0.
*/
// At x=0
let $x=0
let $y=$x**2+(6*$x)+9
console.log($y)

// At x=-1
let $$x=-1
let $$y=$$x**2+(6*$$x)+9
console.log($$y)

// At x=-3
let $$$x=-3
let $$$y=$$$x**2+(6*$$$x)+9
console.log($$$y)

/*9.Write a script that prompt a user to enter hours and
    rate per hour. Calculate pay of the person?
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
*/
let hours=prompt('Enter hours')
let rate=prompt('Enter rate per hour')
let pay=hours*rate
console.log(`Your weekly earning is ${pay}`)

/*10.If the length of your name is greater than 7 say,
     your name is long else say your name is short.
*/
let nameLength=9
nameLength>7
  ?console.log(`Your name is long`)
  :console.log(`Your name is short`)

/*11.Compare your first name length and your family name length
     and you should get this output.
     let firstName = 'Asabeneh'
     let lastName = 'Yetayeh
     Your first name, Asabeneh is longer than your family name,
     Yetayeh
*/
let firstName='Khodeejah'
let lastName='Oyekanmi'
console.log('firstName'.length=='lastName'.length)
console.log(`Your first name, ${firstName} is longer than your\n
family name ${lastName}`)

/*12.Declare two variables myAge and yourAge and assign them
    initial values and myAge and yourAge.
    let myAge = 250
    let yourAge = 25
    I am 225 years older than you.
*/
let myAge=250
let yourAge=25
let ageDifference=myAge-yourAge
console.log(`I am ${ageDifference} years older than you.`)

/*13.Using prompt get the year the user was born and if the user
    is 18 or above allow the user to drive if not tell the user to
    wait a certain amount of years.
    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
*/
let birthYear=prompt('Enter your birth year')
let now=new Date()
let currentYear=now.getFullYear
let age=currentYear-birthYear
let notAdult=18-age
age>=18
  ?console.log(`You are ${age}. You are old enough to drive`)
  :console.log(`You are ${age}. you will be allowed after ${notAdult}\n
  years `)
  

/*14.Write a script that prompt the user to enter number of years.
     Calculate the number of seconds a person can live. Assume some
     one lives just hundred years
     Enter number of years you live: 100
     You lived 3153600000 seconds.
*/
let numOfYears=prompt('Enter your number of years')
let ageSec=numOfYears*60*60*24*365
console.log(`You lived ${ageSec} seconds`)

/*15.Create a human readable time format using the
     Date time object
       YYYY-MM-DD HH:mm
       DD-MM-YYYY HH:mm
       DD/MM/YYYY HH:mm
*/
let $$now=new Date()
let yyyy=$$now.getFullYear()
let mM=$$now.getMonth()
let dd=$$now.getDate()
let hh=$$now.getHours()
let mm=$$now.getMinutes()
console.log(yyyy +'-'+mM+'-'+dd+' '+hh+':'+mm)
console.log(dd +'-'+mM+'-'+yyyy+' '+hh+':'+mm)
console.log(dd+'/'+mM+'/'+dd+' '+hh+':'+mm)
