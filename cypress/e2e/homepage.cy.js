describe('homepage visit', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: '.././fixtures/reservations.json'
    })
    .visit('http://localhost:3000');
  });

  it('should display all necessary elements on landing page', () => {
    cy.get('.app-title')
      .contains('Turing Cafe Reservations');
    cy.get('.resy-form').should('exist');
    cy.get('.resy-form input#name').should('exist');
    cy.get('.resy-form input#Date').should('exist');
    cy.get('.resy-form input#time').should('exist');
    cy.get('.resy-form input#number').should('exist');
    cy.get('.resy-form button[type="submit"]').should('exist');
    cy.get('.resy-container').should('exist');
    cy.get('.resy-container').within(() => {
      cy.get('.resy-card').should('exist')
      cy.get('.resy-card').should('have.length', 3); 
    });
    cy.get('.resy-card:first-child').should('exist').within(() => {
      cy.get('h2').should('have.text', 'Christie');
      cy.get('.date').should('have.text', '12/29');
      cy.get('.time').should('have.text', '7:00 pm');
      cy.get('.number').should('have.text', 'Number of Guests: 12');
      cy.get('button').should('exist');
    });
    cy.get('.resy-card:last-child').should('exist').within(() => {
      cy.get('h2').should('have.text', 'Pam');
      cy.get('.date').should('have.text', '1/21');
      cy.get('.time').should('have.text', '6:00 pm');
      cy.get('.number').should('have.text', 'Number of Guests: 4');
      cy.get('button').should('exist');
    });
  });
});