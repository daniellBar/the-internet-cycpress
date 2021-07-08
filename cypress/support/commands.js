
require('cypress-downloadfile/lib/downloadFileCommand')

// my custom commands
Cypress.Commands.add('basicAuthRequestWithCreds', (url, username, password) => {
    cy.request({
        url: url,
        failOnStatusCode: false,
        auth: {
            username, password
        }
    })
})

Cypress.Commands.add('basicAuthRequest', (url) => {
    cy.request({
        url: url,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('visitWithAuth', (url, username, password) => {
    cy.visit(url, {
        auth: {
            username,
            password,
        }
    })
})

Cypress.Commands.add("parseXlsx", (inputFile) => {
    return cy.task('parseXlsx', { filePath: inputFile })
})
