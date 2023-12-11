describe('Dashboard Component', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.fixture("data.json").as("data");
  });

  it('should display welcome message and show banks on button click', () => {
    cy.get("@data").then((data) => {
      cy.visit(`${data.baseUrl}/dashboard`);

      // Espera un breve momento para que localStorage se actualice
      cy.wait(500);

      // Obtén el nombre de usuario almacenado en localStorage
      const username = 'testuser';


      cy.intercept('GET', 'https://dev.obtenmas.com/catom/api/challenge/banks', {
        statusCode: 200,
        // Puedes agregar la respuesta simulada según tus necesidades
      }).as('getBanks');

      cy.get('button').contains('Mostrar bancos').click();

      cy.wait('@getBanks').then((interception) => {
        // Realizar aserciones basadas en la respuesta de la solicitud
        expect(interception.response.statusCode).to.equal(200);
        // Agregar más aserciones según sea necesario
      });

      // Asegúrate de que el nombre de usuario se muestre correctamente
      cy.get('h2').should('contain', `Bienvenido ${username}`);
      cy.get('button').should('contain', 'Mostrar bancos');
      // Agregar más aserciones según sea necesario
    });
  });
});
