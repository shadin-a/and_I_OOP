const Employee = require("/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/employee.js");
const creature = new Employee("creature@feature.com", 2, "creature");

describe ("Employee", () => {

//TEST FOR NAME
describe("name", () => {
    it('should return Creatures name', () => {
    expect(creature.name).toEqual("creature");
})
});
//TEST FOR ID
describe("id", () => {
    it('should return Creatures id', () => {
    expect(creature.id).toEqual(2);
})
});
//TEST FOR EMAIL
describe("email", () => {
    it('should return Creatures email', () => {
    expect(creature.email).toEqual("creature@feature.com");
})
});
})