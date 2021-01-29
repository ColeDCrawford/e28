describe('Product Page', () => {

    // Test product
    let product = {
        name: 'Driscoll’s Strawberries',
        id: 1
    }

    it('shows a product', () => {
        cy.visit('/products/' + product.id);
        cy.contains('[data-test="product-name"]', product.name);
    })

    it('adds to cart', () => {
        cy.visit('/products/' + product.id);

        cy.get('[data-test="add-to-cart-button"]').click();

        cy.get('[data-test="add-to-cart-confirmation"]').should('exist');
        cy.contains('[data-test="cart-count"]', 1);
    })
})