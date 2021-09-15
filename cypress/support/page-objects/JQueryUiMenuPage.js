/// <reference types="cypress"/>

//page name
const JQUERY_UI_MENUS = "JQuery UI Menus";

//selectors
const ENABLED_TAB = "#ui-id-2";
const DOWNLOAD_TAB = "#ui-id-4";
const EXCEL_TAB = "#ui-id-8";

export const navigateToPage = () => {
  cy.navigateToTestPageByClick(JQUERY_UI_MENUS);
};

export const validateNavigation = () => {
  cy.log("validating navigation to JQueryUI - Menu page");
  cy.get("h3").should("include.text", "JQueryUI - Menu");
  cy.log("navigation successful");
};

export const clickEnabledTab = () => {
  cy.log("click Enabled tab in menu");
  cy.get(ENABLED_TAB).click();
};

export const clickDownloadTab = () => {
  cy.log("click download tab in sub menu");
  cy.get(DOWNLOAD_TAB).click();
};

export const downloadFile = () => {
  cy.log("downloading Excel file");
  _getDownloadUrl().then((href) => {
    cy.downloadFile(
      `http://the-internet.herokuapp.com${href}`,
      "cypress/fixtures/",
      "menu.xlsx"
    );
  });
};

export const validateFileDownloaded = () => {
  //read file has a default file existence assertion
  cy.log("validating file : menu.xlsx was downloaded");
  cy.readFile("cypress/fixtures/menu.xlsx");
  cy.log("file was downloaded");
};

export const convertExcelToJson = () => {
  //converting excel file to an array of excel info
  cy.log("start converting excel file to Json file");
  cy.parseXlsx("cypress/fixtures/menu.xlsx").then((jsonDataArr) => {
    cy.log("extracting relevant info from Excel file");
    //getting the relevant info for tax. (after inspecting in console.log)
    const key = jsonDataArr[0].data[0][2];
    const value = jsonDataArr[0].data[1][2];
    cy.log("creating json file");
    // creating a json file with tax object
    cy.writeFile("cypress/fixtures/menuData.json", { [key]: value });
    cy.log("json file created at path: cypress/fixtures/menuData.json");
  });
};

export const logTaxValue = () => {
  cy.log("logging tax value to console");
  cy.readFile("cypress/fixtures/menuData.json").then((data) => {
    cy.log(`tax value is: ${data.tax}`);
    console.log(`tax value is: ${data.tax}`);
  });
};

const _getDownloadUrl = () => {
  //this should yields the href because the chainer changed the subject
  return cy.get(EXCEL_TAB).should("have.attr", "href");
};
