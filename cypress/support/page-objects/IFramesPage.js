/// <reference types="cypress"/>

//url endpoint
const ENDPOINT = "iframe";

//pages names
const FRAMES = "Frames";
const IFRAME = "iFrame";

//selectors
const FILE_TAB = ":nth-child(1) > .tox-mbtn__select-label";
const NEW_DOCUMENT_TAB = ".tox-menu-nav__js";
const IFRAME_SELECTOR = "#mce_0_ifr";
const IFRAME_DOCUMENT_PROPERTY = "0.contentDocument";
const IFRAME_PARAGRAPH = "p";

export const navigateToPage = () => {
  cy.navigateToTestPageByClick(FRAMES);
  cy.navigateToTestPageByClick(IFRAME);
};

export const validateNavigation = () => {
  cy.validateNavigationByUrl(ENDPOINT);
};

export const createNewDocument = () => {
  cy.log("creating a new document to clear the paragraph");
  _clickFileBtn();
  _selectNewDocument();
};

export const typeText = (text) => {
  cy.log("typing text to the paragraph");
  _getIframeBody()
    //go to the paragraph
    .find(IFRAME_PARAGRAPH)
    .type(text);
};

export const validateText = (text) => {
  cy.log("validating text was typed");
  _getIframeBody().find(IFRAME_PARAGRAPH).should("include.text", text);
};

const _clickFileBtn = () => {
  cy.log("clicking File tab");
  cy.get(FILE_TAB).click();
};

const _selectNewDocument = () => {
  cy.log("clicking New Document tab");
  cy.get(NEW_DOCUMENT_TAB).click();
};

const _getIframeDocument = () => {
  return (
    cy
      .get(IFRAME_SELECTOR)
      // DOM element under property "0".
      // From the real DOM iframe element we can get
      // the "document" element, it is stored in "contentDocument" property
      .its(IFRAME_DOCUMENT_PROPERTY)
  );
};

const _getIframeBody = () => {
  return _getIframeDocument()
    .its("body")
    .should("not.be.undefined")
    .then(cy.wrap);
};
