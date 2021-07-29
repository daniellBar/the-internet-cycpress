/// <reference types="cypress"/>

//url endpoint
const ENDPOINT = 'checkboxes'

//page name
const CHECKBOXES = 'Checkboxes'

//selectors
const BOX1 = '#checkboxes > :nth-child(1)'
const BOX2 = '#checkboxes > :nth-child(3)'

export const navigateToPage = () => {
    cy.navigateToTestPageByClick(CHECKBOXES)
}

export const validateNavigation = () => {
    cy.validateNavigationByUrl(ENDPOINT)
}

// assuming the first checkbox should always loads uncheck and the second one always loads check.

export const validateInitialBoxesState = () => {
    cy.log('validating checkboxes initial state')
    cy.get(BOX1).should('not.be.checked')
    cy.get(BOX2).should('be.checked')
    cy.log('States Are As Expected')
}

export const toggleCheckBoxes = () => {
    cy.log('Toggling Checkboxes')
    cy.get(BOX1).check()
    cy.get(BOX2).uncheck()
}

export const validateToggle = () => {
    cy.get(BOX1).should('be.checked')
    cy.get(BOX2).should('not.be.checked')
    cy.log('Toggling Checkboxes Successful')
}




