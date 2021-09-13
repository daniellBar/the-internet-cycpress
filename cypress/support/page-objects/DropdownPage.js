/// <reference types="cypress"/>

//url endpoint
const ENDPOINT = "dropdown";

//page name
const DROPDOWN = "Dropdown";

//selectors
const DROPDOWN_SELECTOR = "#dropdown";

//jQuery selected selector
const SELECTED_SELECTOR = `select${DROPDOWN_SELECTOR} option:selected`;

//select options
const OPTION1 = "Option 1";
const OPTION2 = "Option 2";

// inputs to options map
const INPUTS_TO_OPTIONS = { 1: OPTION1, 2: OPTION2 };

export const navigateToPage = () => {
  cy.navigateToTestPageByClick(DROPDOWN);
};

export const validateNavigation = () => {
  cy.validateNavigationByUrl(ENDPOINT);
};

export const selectOption = (option) => {
  cy.get(DROPDOWN_SELECTOR).select(INPUTS_TO_OPTIONS[option]);
};

export const validateSelectedOptionByValue = (selectedOption) => {
  cy.get(DROPDOWN_SELECTOR).should("have.value", selectedOption);
};

export const validateSelectedOptionBySelectedAttribute = (selectedOption) => {
  cy.get(SELECTED_SELECTOR).should("have.value", selectedOption);
};
