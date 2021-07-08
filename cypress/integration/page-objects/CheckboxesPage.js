/// <reference types="cypress"/>

//selectors
const BOX1 = '#checkboxes > :nth-child(1)'
const BOX2 = '#checkboxes > :nth-child(3)'
export const navigateToPageByClick = () => {
    cy.log('navigating to page checkboxes page')
    cy.contains('Checkboxes').click()
}

export const validateNavigation = () => {
    cy.log('validating navigation')
    cy.url().should('include', 'checkboxes')
    cy.log('navigation successful')
}

// assuming the first checkbox should always loads uncheck and the second one always loads check.

export const validateInitialBoxesState = () => {
    cy.log('validating checkboxes initial state')
    cy.get(BOX1).should('not.be.checked')
    cy.get(BOX2).should('be.checked')
    cy.log('states are as expected')
}

export const toggleCheckBoxes = () => {
    cy.log('toggeling checkboxes')
    cy.get(BOX1).check()
    cy.get(BOX2).uncheck()
}

export const validateToggle = () => {
    cy.get(BOX1).should('be.checked')
    cy.get(BOX2).should('not.be.checked')
    cy.log('toggeling checkboxes successful')
}




