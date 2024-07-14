// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Compare whether the element have a specific text provided or not
Cypress.Commands.add('fetchAndCompareText', (elementSelector, expectedText) => {
    elementSelector.then(($el) => {
        const extractedText = $el.text()
        assert.equal(extractedText, expectedText)
    });
})

// Check an specifuic element exist in DOM
Cypress.Commands.add('checkElementExists', (selector) => {
    selector.should('exist')
});

// Check and element does not exist in DOM
Cypress.Commands.add('checkElementNotExists', (selector) => {
    selector.should('not.exist')
});


// Check an text exist in Page 
Cypress.Commands.add('checkTextExists', (text) => {
    cy.contains(text).should('exist')
});


// Check an text does not exist in Page 
Cypress.Commands.add('checkTextNotExists', (text) => {
    cy.contains(text).should('not.exist')
});