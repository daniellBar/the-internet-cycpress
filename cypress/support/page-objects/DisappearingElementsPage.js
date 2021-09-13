/// <reference types="cypress"/>

//url endpoint
const ENDPOINT = "disappearing_elements";

//page name
const DISAPPEARING_ELEMENTS = "Disappearing Elements";

//selectors

export const navigateToPage = () => {
  cy.navigateToTestPageByClick(DISAPPEARING_ELEMENTS);
};

export const validateNavigation = () => {
  cy.validateNavigationByUrl(ENDPOINT);
};

export const validateElements = () => {
  cy.log("validating all elements loaded");
  cy.get("ul").find("li").should("have.length", 5);
  cy.log("elements loaded successfully");
};
