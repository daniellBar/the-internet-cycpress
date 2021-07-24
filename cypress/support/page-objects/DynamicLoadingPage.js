/// <reference types="cypress"/>

export const navigateToPageByClick = () => {
    cy.log('clicking Dynamic Loading to navigate to page')
    cy.contains('Dynamic Loading').click()
}

export const validateNavigationToPage = () => {
    cy.log('validating on dynamic_loading page')
    _validateNavigation('dynamic_loading')
}

export const selectExample = (num) => {
    cy.log(`selecting example number: ${num}`)
    cy.contains(`Example ${num}`).click()
}

export const validateNavigationToExamplePage = () => {
    cy.log('validating on example2 page page')
    _validateNavigation('2')
}

export const clickStartButton = () => {
    cy.log('clicking start button')
    cy.get('button').click()
}

export const validateHelloWorld = (seconds) => {
    cy.log('validating hello world appears on page')
    cy.get('#finish > h4', { timeout: seconds * 1000 })
    cy.log('hello world appears on page')
}

const _validateNavigation = (endpoint) => {
    cy.url().should('include', endpoint)
}