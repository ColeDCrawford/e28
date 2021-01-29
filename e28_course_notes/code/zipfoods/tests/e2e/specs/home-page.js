describe('Home Page', () => {
    it('visits the homepage', () => {

        cy.visit('/')
        cy.contains('h2', 'Featured Products')

        // Confirm we see at least 3 products
        cy.get('[data-test="featured-product"]').its('length').should('be.gte', 3);
    })
})