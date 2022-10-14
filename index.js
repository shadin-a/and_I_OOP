const { inheritInnerComments } = require('@babel/types');
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager.js');
const Intern = require('./lib/intern.js');
const Engineer = require('./lib/engineer.js');
var teamCards = [];



//FUNCTION TO CREATE FILE
function writeToFile(filePath, content) {
  var existingHeader = fs.readFileSync(filePath, 'utf8');
  var stuffToWrite = existingHeader + content + '</body></html>';
  fs.writeFile(filePath, stuffToWrite, err => {
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
const getManagerData = async () => {
inquirer.prompt(managerQuestions)
  .then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.officeNumber, answers.email);
    generateManagerCard(manager);
    nextStep();
})
}
//INQUIRER PROMPT FOR INTERN
const getInternData = () => {
  inquirer.prompt(internQuestions)
    .then(answers => {
      //take the data and make a card function goes here DONT FORGET TO PASS IN ANSWERS
      const intern = new Intern(answers.name, answers.id, answers.school, answers.email);
      generateInternCard(intern)
      nextStep();
  })
}

//INQUIRER PROMPT FOR ENGINEER
const getEngineerData = () => {
  inquirer.prompt(engineerQuestions)
    .then(answers => {
      console.log(answers);
      //take the data and make a card function here
      const engineer = new Engineer(answers.name, answers.id, answers.github, answers.email);
      generateEngineerCard(engineer)
      nextStep();
  })
  }

//INQUIRER PROMPT FOR TRANSITORY QUESTION
const nextStep = () => {
  inquirer.prompt(nextStepQuestions)
    .then(answers => {
      console.log(answers);
      console.log(typeof answers);
      switch(answers['nextStep']) {
        case "Intern":    
          return getInternData();

        case "Engineer":
          return getEngineerData();

        case "I'm done!":
          console.log("Team assembled!");
          writeToFile('teamCards.html', teamCards.join(""));
      }
  })
}

//FUNCTION TO CREATE MANAGER CARD 
function generateManagerCard(manager) {
  const generatedManagerHTML = `
  <div class="card flexbox" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
    <p class="card-text">ID: ${manager.getID()} </p>
    <p class="card-text">Office: ${manager.getOfficeNumber()}</p>
    <a href="mailto${manager.getEmail()}" class="card-link">${manager.getEmail()}</a>
  </div>
</div>`;
  teamCards.push(generatedManagerHTML);
}

//FUNCTION TO CREATE INTERN CARD 
function generateInternCard(intern) {
  generatedInternHTML =  `
  <div class="card flexbox" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
    <p class="card-text">ID: ${intern.getID()} </p>
    <p class="card-text">School: ${intern.getSchool()}</p>
    <a href="mailto${intern.getEmail()}" class="card-link">${intern.getEmail()}</a>
  </div>`
  teamCards.push(generatedInternHTML);
}

//FUNCTION TO CREATE ENGINEER CARD 
function generateEngineerCard(engineer) {
  generatedEngineerHTML =  `
  <div class="card flexbox" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
    <p class="card-text">ID: ${engineer.getID()} </p>
    <p class="card-text">Github: github.com/${engineer.getGithub()}</p>
    <a href="mailto${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a>
  </div>`
  teamCards.push(generatedEngineerHTML);
}



//FUNCTION TO INITIALIZE APP
function init() {
  getManagerData();
};

//START THE APP!
init();