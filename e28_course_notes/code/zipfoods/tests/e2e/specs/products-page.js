describe('Products Page', () => {

    // Define a product we can use throughout our tests
    let product = {
        name: 'Driscoll’s Strawberries',
        id: 1
    }

    it('shows all the products', () => {

        cy.visit('/products')
        cy.contains('h1', 'Products')

        // Confirm we see at least 10 products (that's how many product seeds we have)
        cy.get('[data-test="product-name"]').its('length').should('be.gte', 10)

        // Confirm we see a our test product
        cy.contains('[data-test="product-name"]', product.name)

        // Confirm we can click on a product and get to its individual page
        cy.get('[data-test="product-name"]').contains(product.name).click();

        // Confirm the test product page loads
        cy.contains('[data-test="product-name"]', product.name)
        cy.url().should('include', product.id)

    })

    it('shows the correct product images', () => {

        cy.visit('/products')

        cy.get('[data-test=product-image-' + product.id + ']')
            .should('have.attr', 'src')
            .should('include', product.id)
    })

})