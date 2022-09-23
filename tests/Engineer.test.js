const Engineer = require("/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/engineer.js");
const radar = new Engineer('radar', 1, 'radar666', 'radar@oreilly.com');

describe("Engineer", () => {

//TEST FOR GITHUB
describe("getGithub", () => {
    it('should return Radars github username', () => {
        expect(radar.github).toEqual('radar666')
    })
});

//TEST FOR ROLE OVERRIDE
describe('getRole', () => {
    it('should overide the Employee role', () => {
        expect(radar.getRole()).toEqual('Engineer')
    })
});
})
