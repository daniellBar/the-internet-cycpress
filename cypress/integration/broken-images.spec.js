/// <reference types="cypress"/>

import {
    navigateToPage,
    validateImages

} from '../support/page-objects/BrokenImagesPage.js'

describe('Broken Images Page Actions', () => {

    before(() => {
        cy.visitHomePage()
    })

    it('should validate broken/not broken images', () => {
        navigateToPage()
        validateImages()
    })
})