/// <reference types="cypress"/>

//using custom commands created in file commands.ts

const URL = '/basic_auth'

export const requestPage = (creds = null) => {
    const { username, password } = { ...creds }
    if (username && password) {
        return cy.basicAuthRequestWithCreds(URL, username, password)
    }
    return cy.basicAuthRequest(URL)
}

export const validateStatusCode = (response, statusCode) => {
    response.its('status').should('equal', statusCode)
}

export const navigateToPageWithCreds = (creds) => {
    const { username, password } = { ...creds }
    cy.visitWithAuth(URL, username, password)
}

export const validateOnPage = () => {
    cy.contains(' Congratulations! You must have the proper credentials.')
}

