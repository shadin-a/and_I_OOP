const Employee = require('./employee.js');

class Intern extends Employee{
    constructor(name, id, school, email){
      super(name, id, email);
      this.school = school;
    }
    getSchool (){
      return this.school;
    }
    getRole (){
      return 'Intern';
    }
  }
  module.exports = Intern;