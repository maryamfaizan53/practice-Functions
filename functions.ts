///simple function
function cooking():number{
    let soup = 1    +        1.5        +     2
             //chkn       //salt            //water 
    //console.log(soup)
    return(soup)

}
let ingrediants : number = cooking()
console.log(ingrediants);
//.................cslculate area..............................
function calculateArea(width:number,hight:number):number {
   return width*hight

}
let totalArea = calculateArea(10,5)
console.log(totalArea);
//.................function countDown.....................
function countDown(number:number){
if(number <=0){
    console.log("DONE")
    return
}

console.log(number);
countDown(number-1)
}
countDown(10);
//..............recursive function..........................
function factorial(n: number):number{
    if(n===0){
        return 1
    }
    return n*factorial(n-1)
    }

let result = factorial(5)
console.log(result);

//.................nested functions.............
function abbuJee(){
    function ammiJee(){
        console.log("Ammi");
    }
    ammiJee()
    }
abbuJee();

//..................function callback.............
function data(callback:any){
    let name= "Maryam"
    callback(name)}



data(function(name:string){
    console.log("Hello "+name);
})
///create a function names calculateProduct that takes two parameters,multiplies them together, and return the result.

function calculateProduct(num1:number,num2:number):number{
    return num1*num2
}
const result1:number = calculateProduct(5,10);
console.log(result1);

//////define a function that takes two parameters, name and greeting, where greeting has a default parameter.the function should return a greeting msg
function greeting(name:string,greet:string="Hello"):string{
    return`${greet},${name}`
}
let new1 = greeting("Maryam")
console.log(new1);
let new2 = greeting("Maryam", "Hi");
console.log(new2);
////..arrow function.................
let add = (a:number, b:number):number =>{
    return a+b
}
console.log(add(2,3))
///.......rest parameter....................
function sumAll(...num:number[]){
    let total = 0
    num.forEach((n) => total += n)
    return total

}
console.log(sumAll(8,2,3,4,9,5));
//...........spread operator..............
let spread = [1, 2, 3, 4, 5]
console.log(...spread);
console.log(Math.max(...spread));
//..............function returning another function
function multiplier(num:number){
    return (anotherNum:number)=>{
        return num*anotherNum
    }

}
const triple = multiplier(3);
console.log(triple(5));
//................recursive function
function factorial2(num:number):number{
    if(num <= 1){
      return 1
    }
    return num*factorial2(num-1)
    
}
console.log(factorial2(6));
///...................nested function
//write a function that contains two nested functions.the outer function should accept a parameter x,and its nested function should increamentand then triple x.the outer function should return the result of thetripled value after increamenting.
function outerFucntion(x:number){
    function innerFuction(){
        x++
        return x*3
    }
    return innerFuction()



    }
    console.log(outerFucntion(4));

    ///anounomous function and callbacks....
//create an anonymous function that takes an array of numbersand a callback function. the anonymous function should apply the callback function to eachelament of the array and return a new array with the results.
const numbers = [1, 2, 3, 4, 5]
const doubledNumbers =(arr:number[],callback:(num:number)=> number):number[]=>{
    return arr.map(callback)
};
const callback = (num:number):number=>{
    return num*2
}
const result2 = doubledNumbers(numbers, callback)
console.log(result2);
////............settimeout.............................
 // use set timeout with i a function to simulate a delay in processing e.g retrieving data from a database.
 //the function should accept a callback and invoke it after a delay of 2 sec.
 function processData(callback:()=>void){
    setTimeout(()=>{
        callback()
    }, 2000);
} 
processData(()=>{
    console.log("Data processed");
    
}); 

///.............another example.....
type operation = (a:number, b:number)=>number;
const addition:operation =(a, b)=>a+b;
const subtraction:operation =(a, b)=>a-b;
const multiplication:operation =(a, b)=>a*b;
const division:operation =(a, b)=>a/b;
function calculate(a:number, b:number, op:operation):number{
    return op(a, b)
}
console.log(calculate(5, 3, addition));
console.log(calculate(10,5,subtraction));
console.log(calculate(4, 6, multiplication));
console.log(calculate(15, 3, division));

///..........array..................
let arrayFruits : string[] = ["apple","mango","banana","orange"];
arrayFruits.push("kiwi");
console.log(arrayFruits);
arrayFruits.shift()
console.log(arrayFruits);
arrayFruits.unshift("peach")
console.log(arrayFruits);
//find the index of banana
let index = arrayFruits.indexOf("banana")
console.log(index);
//remove banana using index
arrayFruits.splice(2, 1)///it removes from the mid starting index se num ber of elements and return it in a new array
console.log(arrayFruits);
//slice array
let sliceArray = arrayFruits.slice(1, 3)///it give a slice of cake starting index and number of elements
console.log(sliceArray);
//.........type intersection.............
type picnicBag = {
    sunscreen:string,
    glasses:string,
    towel:string
}
type lunchBox = {
    sandwich:string,
    chips:string,
    drink:string
}
type picnic = picnicBag & lunchBox
let myPicnic:picnic = {
    sunscreen:"neutrogena",
    glasses:"brown",
    towel:"large",
    sandwich:"bread",
    chips:"potato",
    drink:"water"
}  
console.log(myPicnic); 

///matrix...............
let matrix :number[][]=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matrix[1][2]);
//................objects in array...............
type book = {
    title:string,
    author:string,
    year:number
}
let books:book[]=[
    {title:"The Great Gatsby", author:"F. Scott Fitzgerald", year:1925},
    {title:"To Kill a Mockingbird", author:"Harper Lee", year:1960},
    {title:"1984", author:"George Orwell", year:1949}
]
console.log(books);
//adding new books in array
books.push({title:"Pride and Prejudice", author:"Jane Austen", year:1813})
console.log(books);

////finding a book by author.
let findBook= books.find(book=>book.author==="Jane Austen")
console.log(findBook);

    


    




