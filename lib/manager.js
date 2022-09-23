const Employee = require('/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/employee.js');

class Manager extends Employee {
    constructor(name, id, officeNumber, email) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
      return this.officeNumber;
    }

    getRole() {
      return 'Manager';
    }
  }
  module.exports = Manager;