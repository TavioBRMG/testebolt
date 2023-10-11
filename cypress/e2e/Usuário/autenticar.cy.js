describe("Teste Login", () => {
  it("Logar", () => {
    cy.visit("https://seubarriga.wcaquino.me/login");
    cy.get("#email").type("userBolt");
    cy.get("#senha").type("Bolt@2023");
  });
});
