import inquirer from "inquirer"
const answer = await inquirer.prompt({
    name:"num1",
    type:"number",
    message:"kindly enter your first number",
    
})
const answer1 = await inquirer.prompt({
    name:"num2",
    type:"number",
    message:"kindly enter your second number",

})
const answer2 = await inquirer.prompt({
    name:"operator",
    type:"list",
    choices:["*","+","-","/"],
    message:"which operation you want to perform",

});
let result:number=0;
if(answer2.operator==="+"){
    result=answer.num1+answer1.num2;
}
else if(answer2.operator==="-"){
    result=answer.num1-answer1.num2;
}
else if(answer2.operator==="*"){
    result=answer.num1*answer1.num2;
}
else if(answer2.operator==="/"){
    result=answer.num1/answer1.num2;
}
console.log("your result is:"+result);

