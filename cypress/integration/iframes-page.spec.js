/// <reference types="cypress"/>

import { navigateToPageByClick, validateNavigation, createNewDocument, typeText, validateText } from './page-objects/IFramesPage'

describe('IFrames Page Actions', () => {
    const text = 'daniel'

    before(() => {
        cy.log('navigating to homepage')
        cy.visit('/')
    })

    it('should include entered name', () => {
        navigateToPageByClick()
        validateNavigation()
        createNewDocument()
        typeText(text)
        validateText(text)
    })
 
})