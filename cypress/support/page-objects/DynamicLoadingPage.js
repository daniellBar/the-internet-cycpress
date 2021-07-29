/// <reference types="cypress"/>

const DYNAMIC_LOADING_ENDPOINT = 'dynamic_loading'
const EXAMPLE2_ENDPOINT = 'dynamic_loading/2'

//page name
const DYNAMIC_LOADING = 'Dynamic Loading'

//selectors
const HELLO_WORLD = '#finish > h4'

export const navigateToPage = () => {
    cy.navigateToTestPageByClick(DYNAMIC_LOADING)
}

export const validateNavigationToPage = () => {
    cy.validateNavigationByUrl(DYNAMIC_LOADING_ENDPOINT)
}

export const selectExample = (num) => {
    cy.log(`selecting example number: ${num}`)
    cy.contains(`Example ${num}`).click()
}

export const validateNavigationToExamplePage = () => {
    cy.validateNavigationByUrl(EXAMPLE2_ENDPOINT)
}

export const clickStartButton = () => {
    cy.log('clicking start button')
    cy.get('button').click()
}

export const validateHelloWorld = (seconds) => {
    cy.log('validating hello world appears on page')
    cy.get(HELLO_WORLD, { timeout: seconds * 1000 })
    cy.log('hello world appears on page')
}
