/// <reference types="cypress"/>

import {
    navigateToPage,
    validateNavigation,
    validateElements

} from '../support/page-objects/DisappearingElementsPage.js'

describe('Disappearing Elements Page Actions', () => {

    before(() => {
        cy.visitHomePage()
    })

    it('should load all elements', () => {
        navigateToPage()
        validateNavigation()
        validateElements()
    })
})