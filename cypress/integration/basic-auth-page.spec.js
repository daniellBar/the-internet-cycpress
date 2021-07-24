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
        // i couldn't find a way to test basic auth page after click from homepage
        // so no real reason in these tests to first visit the homepage
        // but it was asked in the assignment instructions
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

        // i am not very familiar with basic auth.
        // if this should be checked like a login page then there can be a number of tests for input
        // such as: typing a password with more chars then should be, invalid chars, right/wrong username/password and vice versa,
        // typing the right creds but with a change in uppercase/lowercase, etc

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

