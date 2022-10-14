const Manager = require("../lib/manager.js");
const guava = new Manager('guava', 5, '101', 'guava@bean.com');


describe("Intern", () => {

//TEST FOR GITHUB
describe("getOfficeNumber", () => {
    it('should return Guavas offcie number', () => {
        expect(guava.officeNumber).toEqual('101')
    })
});

//TEST FOR ROLE OVERRIDE
describe("getRole", () => {
    it('should overide the Employee role', () => {
        expect(guava.getRole()).toEqual("Manager")
        
    })
});
})