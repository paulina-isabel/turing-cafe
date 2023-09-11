describe('form use', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: '.././fixtures/reservations.json'
    })
    .visit('http://localhost:3000');
  });

  it('should reflect inputs in the form when typing', () => {
    cy.get('.resy-card:last-child').should('exist').within(() => {
      cy.get('h2').should('have.text', 'Pam');
      cy.get('.date').should('have.text', '1/21');
      cy.get('.time').should('have.text', '6:00 pm');
      cy.get('.number').should('have.text', 'Number of Guests: 4');
      cy.get('button').should('exist');
    });
    cy.get('.resy-form').should('exist');
    cy.get('.resy-form input#name')
      .type('Pau')
      .should('have.value', 'Pau')
    cy.get('.resy-form input#Date')
      .type('9/11')
      .should('have.value', '9/11')
    cy.get('.resy-form input#time')
      .type('9:00')
      .should('have.value', '9:00')
    cy.get('.resy-form input#number')
      .type('2')
      .should('have.value', '2')
    cy.get('.resy-form button[type="submit"]').click()
    cy.get('.resy-card:last-child').should('exist').within(() => {
      cy.get('h2').should('have.text', 'Pau');
      cy.get('.date').should('have.text', '9/11');
      cy.get('.time').should('have.text', '9:00 pm');
      cy.get('.number').should('have.text', 'Number of Guests: 2');
      cy.get('button').should('exist');
    });
  })
})