/// <reference types="cypress"/>

import {
    requestPage,
    validateStatusCode,
    navigateToPageWithCreds,
    validateOnPage
} from '../support/page-objects/BasicAuthPage.js'

describe('Basic Auth Page Actions', () => {

    const creds = { password: 'admin', username: 'admin' }

    beforeEach(() => {
        cy.visitHomePage()
    })

    // testing by response status code
    context('request and response', () => {

        it('without sending authorization credentials should get 401', () => {
            const response = requestPage()
            validateStatusCode(response, 401)
        })

        it('with sending authorization credentials should get 200', () => {
            const { password, username } = creds
            const response = requestPage({ username, password })
            validateStatusCode(response, 200)
        })

        // a few test cases examples
        it('with wrong creds : password = admin ,username = Admin. authorization should get 401', () => {
            const password = 'admin'
            const username = 'Admin'
            const response = requestPage({ username, password })
            validateStatusCode(response, 401)
        })

        it('with wrong creds : password = 1234 ,username = 1234. authorization should get 401', () => {
            const password = '1234'
            const username = '1234'
            const response = requestPage({ username, password })
            validateStatusCode(response, 401)
        })

    })

    // testing by navigating to the page 
    context('visit the page', () => {

        it('navigating with correct creds should load page', () => {
            const { password, username } = creds
            navigateToPageWithCreds({ username, password })
            validateOnPage()
        })
    })
})

