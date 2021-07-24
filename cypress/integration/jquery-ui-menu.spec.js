/// <reference types="cypress"/>

import {
    navigateToPageByClick,
    validateNavigation,
    clickEnabledItem,
    clickDownloadItem,
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