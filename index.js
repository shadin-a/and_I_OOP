const { inheritInnerComments } = require('@babel/types');
const fs = require('fs');
const inquirer = require('inquirer');
const { off } = require("process");
// const manager = require('/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/manager.js');
// const intern = require('/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/intern.js');
// const engineer = require('/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/engineer.js');

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
const managerQuestions = [
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

},]
//TRANSITORY PROMPT
const nextStepQuestions = [{
     name: "nextStep",
     message: "Would you like to add a Engineer or Intern to your team or are you done assembling?",
     type: "list",
    choices: ["Intern", "Engineer", "I'm done!"]
   }]

//PROMPTS FOR INTERN
const internQuestions = [
  {   name: 'name',
      message: 'What is the interns name?',
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
{     name: 'school',
      message: 'What school are they from?',
      type: 'input'

},]
//PROMPTS FOR ENGINEER
const engineerQuestions = [
  {   name: 'name',
      message: 'What is the engineers name?',
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
      message: 'What is their github?',
      type: 'input'

},]
//INQUIRER PROMPT FOR MANAGER :
function getManagerData (){
inquirer.prompt(managerQuestions)
  .then(answers => {
    console.table(answers);
})
nextStep();
}
//INQUIRER PROMPT FOR INTERN
function getInternData (){
  inquirer.prompt(internQuestions)
    .then(answers => {
      console.table(answers);
  })
  nextStep();
  }

//INQUIRER PROMPT FOR ENGINEER
function getEngineerData (){
  inquirer.prompt(engineerQuestions)
    .then(answers => {
      console.table(answers);
  })
  nextStep();
  }

//INQUIRER PROMPT FOR TRANSITORY QUESTION
function nextStep (){
  inquirer.prompt(nextStepQuestions)
    .then(answers => {
      console.log(answers);
      switch(answers.menu) {
        case "Intern":    
            return getInternData();

        case "Engineer":
            return getEngineerData();

        case "I'm done!":
            console.log("the user has ended the app");
      }
          })
}

//FUNCTION TO INITIALIZE APP
function init(){
  getManagerData();
  //writeToFile(filename, html);
};

//START THE APP!
init();
