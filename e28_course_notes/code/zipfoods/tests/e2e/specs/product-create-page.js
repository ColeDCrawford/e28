describe('Product Create Page', () => {

    // Test product
    let product = {
        name: 'My New Product',
        // Append a Unix timestamp to the end of the slug, ensuring it's a unique value
        sku: 'my-new-product-' + Date.now(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pulvinar libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        available: 10,
        price: 4.99,
        weight: .05,
    }

    it('adds a new product', () => {

        // First we have to login, because only auth'd users can add products
        // Login is a custom command defined in /tests/e2e/support/commands.js
        // Ref: https://docs.cypress.io/api/cypress-api/custom-commands.html
        cy.login();

        cy.get('[data-test="add a product-link"]').click();
        cy.get('[data-test=product-name-input]').clear().type(product.name);
        cy.get('[data-test=product-sku-input]').clear().type(product.sku);
        cy.get('[data-test=product-price-input]').clear().type(product.price);
        cy.get('[data-test=product-available-input]').clear().type(product.available);
        cy.get('[data-test=product-weight-input]').clear().type(product.weight);
        cy.get('[data-test=product-perishable-checkbox]').check();
        cy.get('[data-test=product-description-textarea]').clear().type(product.description);
        cy.get('[data-test=add-product-button]').click();
        cy.get('[data-test="product-added-confirmation"]').should('exist');

        // Go to the products page and confirm our new product is visible there
        cy.get('[data-test="products-link"]').click();
        cy.contains(product.name);
    });

    it('shows error messages if new product data is invalid', () => {

        cy.login();

        cy.get('[data-test="add a product-link"]').click();

        // Try a SKU we know is taken
        cy.get('[data-test=product-sku-input]').clear().type('driscolls-strawberries');
        cy.get('[data-test=add-product-button]').click();
        cy.contains("The sku has already been taken.");
    });
})