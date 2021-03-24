const { first } = require("lodash");

it('Open cy', () => {
    cy
        .viewport('macbook-15')

    cy
        .visit('https://www.nehnutelnosti.sk')

    cy
        .get('div[data-location-tree-container]')

    cy
        .intercept(
            '/api/location-tree/getTree/'
            ).as('getTree')
    
    cy
        .get('.input-placeholder')
        .click()
        .as('searchInput')
    
    cy
        .wait('@getTree')

    cy
        .get('.lt-input-input')
        .type('Trnava')
        .should('have.value','Trnava')
    
    cy
        .get('.lt-box-suggest-list >')
        .first()
        .click()
    
    cy
        .get('.lt-box-selected-list')
        .should('exist')

    cy
        .get('.form-group > button')
        .click()

    cy
        .location('href')
        .should('contains','trnava')
});