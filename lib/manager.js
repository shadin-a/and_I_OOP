const Employee = require('/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/employee.js');

class Manager extends Employee{
    constructor (email, id, name, officeNumber){
      super(email, id, name);
      this.officeNumber = officeNumber;
    }
    getOfficeNumber (){
      return this.officeNumber;
    }
    getRole (){
      return Manager;
    }
  }
  module.exports = Manager;