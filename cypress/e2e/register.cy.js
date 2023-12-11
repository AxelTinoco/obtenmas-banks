// cypress/integration/registerUser.spec.js

describe('RegisterUser Component', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.fixture("data.json").as("data");
  });
  it("Register", () => {
    cy.get("@data").then((data) => {
      cy.visit(data.baseUrl);

      cy.wait(3000);

      const username = 'testuser';
      // Fill in the username input
      cy.get('input[name="user"]').type(username);
      // Submit the form
      cy.get('button[type="submit"]').click();
      // Store the username in localStorage
      localStorage.setItem('user_name', username);

      // Assert that the page redirects to "/dashboard"
      cy.url().should('include', '/dashboard');

    });
  });
});
