/// <reference types="cypress"/>

import {
    navigateToPageByClick,
    validateNavigation,
    validateInitialBoxesState,
    toggleCheckBoxes,
    validateToggle
} from '../support/page-objects/CheckboxesPage.js'

describe('Checkboxes Page Actions', () => {

    before(() => {
        cy.visitHomePage()
    })

    it('should toggle checkboxes states', () => {
        navigateToPageByClick()
        validateNavigation()
        validateInitialBoxesState()
        toggleCheckBoxes()
        validateToggle()
    })
})
