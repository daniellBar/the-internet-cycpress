/// <reference types="cypress"/>

import {
    navigateToPageByClick,
    validateNavigationToPage,
    selectExample,
    validateNavigationToExamplePage,
    clickStartButton,
    validateHelloWorld
} from '../support/page-objects/DynamicLoadingPage.js'


describe('Dynamic Loading Page Actions', () => {

    before(() => {
        cy.visitHomePage()
    })

    it('should have hello world', () => {
        navigateToPageByClick()
        validateNavigationToPage()
        selectExample(2)
        validateNavigationToExamplePage()
        clickStartButton()
        validateHelloWorld(10)
    })

})