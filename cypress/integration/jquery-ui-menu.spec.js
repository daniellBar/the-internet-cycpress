/// <reference types="cypress"/>

import {
    navigateToPage,
    validateNavigation,
    clickEnabledTab,
    clickDownloadTab,
    downloadFile,
    validateFileDownloaded,
    convertExcelToJson,
    logTaxValue
} from '../support/page-objects/JQueryUiMenuPage'

describe('JQueryUI–Menu Page Actions', () => {

    before(() => {
        cy.visitHomePage()
    })

    it('should download file', () => {
        navigateToPage()
        validateNavigation()
        clickEnabledTab()
        clickDownloadTab()
        downloadFile()
        validateFileDownloaded()
        convertExcelToJson()
        logTaxValue()
    })

})