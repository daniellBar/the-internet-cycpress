/// <reference types="cypress"/>

//url endpoint
const ENDPOINT = 'typos'

//page name
const TYPOS = 'Typos'

//selectors
const EXAMPLE = '.example'


export const navigateToPage = () => {
    cy.navigateToTestPageByClick(TYPOS)
}

export const validateNavigation = () => {
    cy.validateNavigationByUrl(ENDPOINT)
}

export const scanForTypos = () => {
    _createTextToCheck().then(strToCheck => {
        cy.checkForTypos(strToCheck).then(typos => {
            if (typos.length > 0) {
                cy.log(`typos found: ${typos}`)
            }
            else {
                cy.log('no typos were found')
            }
        })
    })
}

const _createTextToCheck = () => {
    let strToCheck = ''
    return cy.get(EXAMPLE).children().each(child => {
        cy.wrap(child).invoke('text').then(text => {
            strToCheck += ` ${text}`
        })
    }).then(() => {
        strToCheck.trim()
        cy.wrap(strToCheck)
    })
}