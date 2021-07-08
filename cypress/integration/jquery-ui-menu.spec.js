/// <reference types="cypress"/>

import { navigateToPageByClick, validateNavigation, clickEnabledItem, clickDownloadItem, downloadFile, validateFileDownloaded, convertExcelToJson, logTaxValue } from './page-objects/JQueryUiMenuPage'

describe('JQueryUI–Menu Page Actions', () => {

    before(() => {
        cy.log('navigating to homepage')
        cy.visit('/')
    })

    it('should download file', () => {
        navigateToPageByClick()
        validateNavigation()
        clickEnabledItem()
        clickDownloadItem()
        downloadFile()
        validateFileDownloaded()
        convertExcelToJson()
        logTaxValue()
    })

})