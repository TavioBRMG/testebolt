const { validUser, createUser, registerUser } = require("./usuario");

describe("Repositório de Usuários", () => {

  it("Verificar reposiório", async () => {
    var userExists = await validUser()
    if(!userExists){
        const status = await registerUser()
        //expect(true).to.equal(status)
        cy.log(status)
    }
  });
});

describe("Autenticar Usuário", async () => {

  /*beforeEach(() => {
    cy.visit("https://seubarriga.wcaquino.me/login");
  })

  it("Popular campos", () => {
    cy.get("#email").type("userBolt");
    cy.get("#senha").type("Bolt@2023");
  });*/

});
