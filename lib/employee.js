
class Employee {
  constructor(name, id, email) {
    this.email = email;
    this.id = id;
    this.name = name;
  }

  getEmail() {
    return this.email;
  }

  getID() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return 'Employee'
  }
}

module.exports = Employee;

