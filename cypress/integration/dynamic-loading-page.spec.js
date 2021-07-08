/// <reference types="cypress"/>

import { navigateToPageByClick, validateNavigationToPage, selectExample, validateNavigationToExamplePage, clickStartButton, validateHelloWorld } from './page-objects/DynamicLoadingPage.js'

describe('Dynamic Loading Page Actions', () => {
    
    before(() => {
        cy.log('navigating to homepage')
        cy.visit('/')
    })

    it('should include entered name', () => {
        navigateToPageByClick()
        validateNavigationToPage()
        selectExample(2)
        validateNavigationToExamplePage()
        clickStartButton()
        validateHelloWorld(10)
    })

})