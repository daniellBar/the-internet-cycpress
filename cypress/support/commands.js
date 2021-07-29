
require('cypress-downloadfile/lib/downloadFileCommand')
require('@4tw/cypress-drag-drop')

// my custom commands

Cypress.Commands.add('visitHomePage', () => {
    cy.log('navigating to homepage')
    cy.visit('/')
})

Cypress.Commands.add('navigateToTestPageByClick', (pageName) => {
    cy.log(`navigating to page: "${pageName}" `)
    cy.log(`clicking: "${pageName}" link`)
    cy.contains(pageName).click()
})

Cypress.Commands.add('validateNavigationByUrl', (endpoint) => {
    cy.log(`Validating Navigation to endpoint: /${endpoint}`)
    cy.url().should('include', endpoint)
    cy.log('Navigation Successful')
})

Cypress.Commands.add('basicAuthRequestWithCreds', (url, username, password) => {
    return cy.request({
        url: url,
        failOnStatusCode: false,
        auth: {
            username, password
        }
    })
})

Cypress.Commands.add('basicAuthRequest', (url) => {
    return cy.request({
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

Cypress.Commands.add("getImgNaturalWidth", (imgSelector) => {
    return cy.get(imgSelector)
        .should('be.visible')
        .then(($img) => cy.wrap($img[0].naturalWidth))
})

Cypress.Commands.add("checkForTypos", (text) => {
    return cy.task('checkForTypos', { text })
})



