const { v4: uuidv4 } = require('uuid');

const validUser = async () => {
  const json  = cy.readFile(__dirname + "/users/users.json");
  if(json.length > 0){
    return true
  }
  return false
};

const createUser = () => {
  // Gera ID aleatório
  let id = uuidv4()
  // Retorno JSON
  return {
    nome: `user_${id}`,
    email: `${id}@email.com`,
    senha: 'bolt2023'
  }
}

const saveUser = async (user) => {
    var json  = cy.readFile(__dirname + "/users/users.json");
    return json
    //await cy.writeFile(__dirname + "/users/users.json", json.teste)
    //return true
}

const registerUser = async () => {
  // Gera usuário
  const user = createUser()

  // Visita página
  cy.visit("https://seubarriga.wcaquino.me/login");
  cy.get(':nth-child(2) > a').click()
  
  // Popula campos
  cy.get('#nome').type('teddy')
  cy.get('#email').type('teddy@email.com')
  cy.get('#senha').type('teste')
  
  // Submete campos
  cy.get('.btn').click()

  // Verifica status de submissão
  const alert = await cy.get('.alert')
  const status = (await alert.attr('class')).includes('success')
  return true ? await saveUser(user) : await alert.text()
}

module.exports = {
  validUser,
  createUser,
  registerUser
};
