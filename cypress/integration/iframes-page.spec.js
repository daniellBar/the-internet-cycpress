/// <reference types="cypress"/>

import {
    navigateToPage,
    validateNavigation, createNewDocument,
    typeText,
    validateText
} from '../support/page-objects/IFramesPage'

describe('IFrames Page Actions', () => {
    const text = 'daniel'

    before(() => {
        cy.visitHomePage()
    })

    it('should include entered name', () => {
        navigateToPage()
        validateNavigation()
        createNewDocument()
        typeText(text)
        validateText(text)
    })

})