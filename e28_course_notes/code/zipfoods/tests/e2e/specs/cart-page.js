describe('Cart Page', () => {

    // Test product
    let product = {
        name: 'Driscoll’s Strawberries',
        id: 1
    }

    it('adds and removes from cart', () => {

        // Add to cart from product page
        cy.visit('/products/' + product.id);
        cy.get('[data-test="add-to-cart-button"]').click();

        // Confirm cart shows product
        cy.visit('/cart');
        cy.contains('[data-test="cart-contents"]', '1 x ' + product.name);

        // Remove from cart 
        cy.get('[data-test="remove-from-cart-button"]').click();
        cy.contains('[data-test="cart-count"]', 0);
        cy.contains('No items');
    })
})