// https://docs.cypress.io/api/introduction/api.html

describe('Weekend Warrior', () => {
  let route = {
    name: 'Time Wave Zero',
    id: 106087605
  }

  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Weekend Warrior')
  })

  it('Shows all MP routes', ()=> {
    cy.visit('/routes')
    cy.contains('.card-title', route.name);
    cy.get('.card').should('have.length', 2243);
  })
})