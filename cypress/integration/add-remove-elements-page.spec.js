import {
  navigateToPage,
  validateNavigation,
  addElement,
  validateAddedElement,
  removeElement,
  validateRemovedElement,
} from "../support/page-objects/AddRemoveElementsPage.js";

describe("add/remove element page actions", () => {
  before(() => {
    cy.visitHomePage();
  });

  it("should add/remove new button element", () => {
    navigateToPage();
    validateNavigation();
    addElement();
    validateAddedElement();
    removeElement();
    validateRemovedElement();
  });
});
