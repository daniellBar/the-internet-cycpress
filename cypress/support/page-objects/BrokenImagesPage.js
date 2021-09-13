/// <reference types="cypress"/>

//url endpoint
const ENDPOINT = "broken_images";

//page name
const BROKEN_IMAGES = "Broken Images";

//selectors
const IMAGE1 = '[src="asdf.jpg"]';
const IMAGE2 = '[src="hjkl.jpg"]';
const IMAGE3 = '[src="img/avatar-blank.jpg"]';

export const navigateToPage = () => {
  cy.navigateToTestPageByClick(BROKEN_IMAGES);
};

export const validateNavigation = () => {
  cy.validateNavigationByUrl(ENDPOINT);
};

export const validateImages = () => {
  cy.log("validating images 1 and 2. expected to be broken");
  cy.getImgNaturalWidth(IMAGE1).should("equal", 0);
  cy.getImgNaturalWidth(IMAGE2).should("equal", 0);
  cy.log("validating images 3. expected image to load properly");
  cy.getImgNaturalWidth(IMAGE3).should("to.be.greaterThan", 0);
};
