const Intern = require("/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/intern.js");
const leeroy = new Intern('leeroy@jenkins.com', 9, 'leeroy', 'UW');

describe("Intern", () => {

//TEST FOR GITHUB
describe("getSchool", () => {
    it('should return Leeroys school', () => {
        expect(leeroy.school).toEqual('UW')
    })
});

//TEST FOR ROLE OVERRIDE
describe('getRole', () => {
    it('should overide the Employee role', () => {
        expect(leeroy.getRole()).toEqual('Intern')
    })
});
})
