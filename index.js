const { inheritInnerComments } = require('@babel/types');
const fs = require('fs');
const inquirer = require('inquirer');
const { off } = require("process");
const manager = require('/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/manager.js');
const intern = require('/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/intern.js');
const engineer = require('/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/engineer.js');

//FUNCTION TO CREATE FILE
function writeToFile(fileName, html) {
  fs.writeFile(filename, html, err => {
      if (err) {
        console.error(err);
      } else {
          console.log('file written successfully');
      }
    });
}
//PROMPTS FOR MANAGER 
inquirer
  .prompt([
  {   name: 'name',
      message: 'What is the team managers name?',
      type: 'input'

},
{     name: 'id',
      message: 'What is their ID?',
      type: 'input'

},
{     name: 'email',
      message: 'What is their email address?',
      type: 'input'

},
{     name: 'officeNumber',
      message: 'What is their office number?',
      type: 'input'

},
{
     name: "nextStep",
     message: "Would you like to add a Engineer or Intern to your team or are you done assembling?",
     type: "list",
    choices: ["Intern", "Engineer", "I'm done!"]
   }])

   //PROMPTS FOR INTERN

   //PROMPTS FOR ENGINEER
.then((answer) => {
  console.log("Hello" + answer.name);
  console.log("This is your ID:" + answer.id);
  console.log("This is your email:" + answer.email);
  console.log("This is your office number:" + answer.officeNumber);
  console.log(answer.nextStep);
});

// function validateUserInput (){
//   let x = userInput.value;
//   if (x == properUserInput){
//     alert ("Please check your input.");
//     return false;
//   }
// }
//FUNCTION TO INITIALIZE APP
function init(){
  writeToFile(filename, html);
}

