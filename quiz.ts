import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt([{
    name:"userAnswer",
    type:"string",
    message:"what is the capital of France?",
}]);
function quiz(question:string,correctAnswer:string){
    if(answer.userAnswer.toLowerCase()===correctAnswer.toLowerCase()){
        console.log(chalk.green("Correct!"));
    }
    else{
        console.log(chalk.red("Incorrect"));
    }
    }
    quiz("what is the capital of France?","Paris");
