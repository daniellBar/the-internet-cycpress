/// <reference types="cypress"/>

export const navigateToPageByClick = () => {
    cy.log('clicking JQuery UI Menus')
    cy.contains('JQuery UI Menus').click()
}

export const validateNavigation = () => {
    cy.log('validating navigation to JQueryUI - Menu page')
    cy.url().get('h3').should('include.text', 'JQueryUI - Menu')
    cy.log('navigation successful')
}

export const clickEnabledItem = () => {
    cy.log('click Enabled item in menu')
    cy.get('#ui-id-2').click()
}

export const clickDownloadItem = () => {
    cy.log('click download item in sub menu')
    cy.get('#ui-id-4').click()
}

// couldn't find a way to handle the download by click. had no time to investigate further.
// insted getting the href and sending it to a custom command which i got from a plugin on cypress official site.
// https://docs.cypress.io/plugins/directory

export const downloadFile = () => {
    cy.log('downloading Excel file')
    _getDownloadUrl().then(href => {
        cy.downloadFile(`http://the-internet.herokuapp.com${href}`, 'cypress/fixtures/', 'menu.xlsx')
    })
}

export const validateFileDownloaded = () => {
    //read file has a default file existence assertion
    cy.log('validating file : menu.xlsx was downloaded')
    cy.readFile('cypress/fixtures/menu.xlsx')
    cy.log('file was downloaded')
}

export const convertExcelToJson = () => {
    //converting excel file to an array of excel info
    cy.log('start converting excel file to Json file')
    cy.parseXlsx('cypress/fixtures/menu.xlsx').then((jsonDataArr) => {
        cy.log('extracting relevant info from Excel file')
        //geting the relevant info for tax. (after inspecting in console.log)
        const key = jsonDataArr[0].data[0][2]
        const value = jsonDataArr[0].data[1][2]
        cy.log('creating json file')
        // creating a json file with tax object
        cy.writeFile('cypress/fixtures/menuData.json', { [key]: value })
        cy.log('json file created at path: cypress/fixtures/menuData.json')
    })
}

export const logTaxValue = () => {
    cy.log('logging tax value to console')
    cy.readFile('cypress/fixtures/menuData.json').then(data => {
        cy.log(`tax value is: ${data.tax}`)
        console.log(`tax value is: ${data.tax}`)
    })
}

const _getDownloadUrl = () => {
    return cy.get('#ui-id-8').should('have.attr', 'href')
}