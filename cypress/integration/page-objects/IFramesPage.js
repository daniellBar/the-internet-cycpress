/// <reference types="cypress"/>

export const navigateToPageByClick = () => {
    cy.log('navigating to iFrame page')
    cy.contains('Frames').click()
    cy.contains('iFrame').click()
}

export const validateNavigation = () => {
    cy.log('validating navigating to iFrame page')
    cy.url().should('include', 'iframe')
    cy.log('navigation succesfull')
}

export const createNewDocument = () => {
    cy.log('creating a new document to clear the paragraph')
    _clickFileBtn()
    _selectNewDocument()
}

export const typeText = (text) => {
    cy.log('typing text to the paragraph')
    _getIframeBody()
        //go to the paragraph
        .find('p')
        .type(text)
}

export const validateText = (text) => {
    cy.log('validating text was typed')
    _getIframeBody().find('p').should('include.text', text)
}

const _clickFileBtn = () => {
    cy.log('clicking File tab')
    cy.get(':nth-child(1) > .tox-mbtn__select-label').click()
}

const _selectNewDocument = () => {
    cy.log('clicking New Document tab')
    cy.get('.tox-menu-nav__js').click()
}

const _getIframeDocument = () => {
    const iFrameSelector = '#mce_0_ifr'
    return cy
        .get(iFrameSelector)
        // DOM element under property "0".
        // From the real DOM iframe element we can get
        // the "document" element, it is stored in "contentDocument" property
        .its('0.contentDocument')
}

const _getIframeBody = () => {
    return _getIframeDocument().its('body').should('not.be.undefined')
        .then(cy.wrap)
}
