/// <reference types="cypress"/>

import {
    navigateToPageByClick,
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
        navigateToPageByClick()
        validateNavigation()
        createNewDocument()
        typeText(text)
        validateText(text)
    })

})