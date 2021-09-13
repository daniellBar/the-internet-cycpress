/// <reference types="cypress"/>

import {
  navigateToPage,
  validateNavigation,
  validateInitialBoxesState,
  toggleCheckBoxes,
  validateToggle,
} from "../support/page-objects/CheckboxesPage.js";

describe("Checkboxes Page Actions", () => {
  before(() => {
    cy.visitHomePage();
  });

  it("should toggle checkboxes states", () => {
    navigateToPage();
    validateNavigation();
    validateInitialBoxesState();
    toggleCheckBoxes();
    validateToggle();
  });
});
