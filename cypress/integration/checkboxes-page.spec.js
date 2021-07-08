/// <reference types="cypress"/>

import { navigateToPageByClick, validateNavigation, validateInitialBoxesState, toggleCheckBoxes, validateToggle } from './page-objects/CheckboxesPage.js'

describe('Checkboxes Page Actions', () => {

    before(() => {
        cy.log('navigating to homepage')
        cy.visit('/')
    })

    it('should toggle checkboxes states', () => {
        navigateToPageByClick()
        validateNavigation()
        validateInitialBoxesState()
        toggleCheckBoxes()
        validateToggle()
    })
})
