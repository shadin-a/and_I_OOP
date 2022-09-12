const { off } = require("process");

class Employee {
  constructor (email, id, name){
    this.email = email;
    this.id = id;
    this.name = name;
  }
getEmail () {
  return this.email;
}
getID (){
  return this.id;
}
getName () {
  return this.name;
}
getRole () {
return Employee;
}
}
class Manager extends Employee{
  constructor (email, id, name, officeNumber){
    super(email);
    super(id);
    super(name);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber (){
    return this.officeNumber;
  }
  getRole (){
    return Manager;
  }
}
class Engineer extends Employee{
  constructor(email, id, name, github){
    super(email);
    super(id);
    super(name);
    this.github = github;
  }
  getGithub (){
    return this.github;
  }
  getRole (){
    return Engineer;
  }
}
class Intern extends Employee{
  constructor(email, id, name, school){
    super(email);
    super(id);
    super(name);
    this.school = school;
  }
  getSchool (){
    return this.school;
  }
  getRole (){
    return Intern;
  }
}