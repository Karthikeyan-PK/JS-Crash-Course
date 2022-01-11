console.log("Hello")
//alert('Welcome!')

var name="Karthikeyan P"
console.log(name)

var favNum=1
console.log(favNum)

//var nameOfUser=prompt('What is your name?') //remove the prompt to use below command
document.getElementById('address').innerHTML = 'Welcome '//+ nameOfUser 

//Numbers
var num1=3;
num1++                 //Increment by 1
num1--                 //Decrement by 1
num1 += 7              //Increment by 7
console.log(num1)
console.log(num1%6)    //Divide /, Multiply *, Modulo %

/*Functions
1. Create a function
2. Call a function
*/
function fun(name){               //Create  //Argument passed function
    alert('Hello '+ name)
}
//fun()                        //Call

function greeting(){
    var name=prompt('What is your name?')
    console.log('Hello '+name)              //String Concatenation
    fun(name)                               //Function call inside a function
}
//greeting()

//Loops
var num=0
while(num<10){
    console.log(num);
    num++
}
for(let num=10;num<=20;num++){
    console.log(num);
}

//Data Types
let age=21                                              //number
let yourName='Karthikeyan P'                            //string
let fullName={firstName:'Karthikeyan',lastName:'P'}     //object(dictionary)
let status=true                                         //boolean
//let fruits=['apple','banana','orange']                  //array(list)
let random                                              //undefined
let nothing=null                                        //value null

//Strings and common methods
let fruit='Apple'
let moreFruits='Apple\nbanana'
let fruitsList='apple,banana,orange'
console.log(moreFruits)
console.log(fruit.length)
console.log(fruit.indexOf('e'))
console.log(fruit.slice(2,5))
console.log(fruit.replace('le',123456))
console.log(fruit.toUpperCase())
console.log(fruit.toLowerCase())
console.log(fruit.charAt(3))
console.log(fruit[3])
console.log(fruit.split(''))                              //Split by characters
console.log(fruitsList.split(','))                        //Split by comma

//Arrays
let fruits=['apple','banana','orange']
fruits=new Array ('apple','banana','orange')
console.log(fruits[0])                                   //access values by index
fruits[1]='watermelon'
console.log(fruits)
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
//Array common methods
console.log('to string',fruits.toString())
console.log(fruits.join('-'))
console.log(fruits.pop(),fruits)                          //removes last element
console.log(fruits.push('orange'),fruits)                 //appends in last
console.log(fruits.shift(),fruits)                        //removes first element(expensive so mostly not used)
console.log(fruits.unshift('apple'),fruits)               //append first element(expensive)

let vegs=['tomato','carrot','onion']
let allGroceries=fruits.concat(vegs)
console.log(allGroceries)
console.log(allGroceries.slice(2,4))
console.log(allGroceries.reverse())
console.log(allGroceries.sort())

let someNumbers=[5,2,10,4,89,45,15,73,28,14,1,3]
console.log(someNumbers.sort(function(a,b){return a-b}))    //ascending sort
console.log(someNumbers.sort(function(a,b){return b-a}))    //descending sort

let emptyArray=new Array()
for(let i=0;i<=10;i++){
    emptyArray.push(i)
}
console.log(emptyArray)

//Objects in JS (Dictionary in python)
let student={
    first:'Karthikeyan',
    last:'P',
    age:21,
    studentInfo:function(){
        return this.first + ' ' + this.last +'\n' + this.age
    },
}
console.log(student.first,student.last)
student.age++
console.log(student.age)
console.log(student.studentInfo())

//Conditionals, Control flows(if else statements)
if (age>=18){
    console.log('Eligible to Vote')
}
else{
    console.log('Not eligible')
}

//Switch statements
switch(1){
    default:
        console.log('Default case index')
    case 0:
        console.log('0th index')
        break
    case 1:
        console.log('1st index')
        break
    case 2:
        console.log('2nd index')
        break
}