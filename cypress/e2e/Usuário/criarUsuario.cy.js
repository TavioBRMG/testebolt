const { validaUsuario } = require("./usuario");

describe("Criar Usuário", () => {
  it("Verificar usuário", () => {
    validaUsuario().then((data) => {
      cy.log(data);
    });
  });
});
