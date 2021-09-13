/// <reference types="cypress"/>

//url endpoint
const ENDPOINT = "add_remove_elements";

//page name
const ADD_REMOVE_ELEMENTS = "Add/Remove Elements";

//selectors
const ADD_ELEMENT_BUTTON = "button";
const ADDED_ELEMENT = ".added-manually";

export const navigateToPage = () => {
  cy.navigateToTestPageByClick(ADD_REMOVE_ELEMENTS);
};

export const validateNavigation = () => {
  cy.validateNavigationByUrl(ENDPOINT);
};

export const addElement = () => {
  cy.log("clicking add element button");
  cy.get(ADD_ELEMENT_BUTTON).click();
};

export const validateAddedElement = () => {
  cy.log("validating added element");
  cy.get(ADDED_ELEMENT).should("include.text", "Delete");
  cy.log("element was added");
};

export const removeElement = () => {
  cy.log("clicking delete button to remove element");
  cy.get(ADDED_ELEMENT).click();
};

export const validateRemovedElement = () => {
  cy.get(ADDED_ELEMENT).should("not.exist");
};
