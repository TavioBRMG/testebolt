const validaUsuario = () => {
  cy.readFile(__dirname + "/users/users.json", "utf-8").then((data) => {
    return data;
  });
};

module.exports = {
  validaUsuario,
};
