const Intern = require("../lib/intern.js");
const leeroy = new Intern('leeroy', 9, 'UW', 'leeroy@jenkins.com');

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
