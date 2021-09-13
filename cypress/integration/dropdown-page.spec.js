/// <reference types="cypress"/>

import {
  navigateToPage,
  validateNavigation,
  selectOption,
  validateSelectedOptionByValue,
  validateSelectedOptionBySelectedAttribute,
} from "../support/page-objects/DropdownPage.js";

describe("Dropdown Page Actions", () => {
  beforeEach(() => {
    cy.visitHomePage();
  });

  it("should have value of selected option", () => {
    navigateToPage();
    validateNavigation();
    selectOption("1");
    validateSelectedOptionByValue("1");
    selectOption("2");
    validateSelectedOptionByValue("2");
  });

  it("should have selected attribute ", () => {
    navigateToPage();
    validateNavigation();
    selectOption("1");
    validateSelectedOptionBySelectedAttribute("1");
    selectOption("2");
    validateSelectedOptionBySelectedAttribute("2");
  });
});
