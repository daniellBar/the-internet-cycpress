/// <reference types="cypress"/>

import {
  navigateToPage,
  validateNavigationToPage,
  selectExample,
  validateNavigationToExamplePage,
  clickStartButton,
  validateHelloWorld,
} from "../support/page-objects/DynamicLoadingPage.js";

describe("Dynamic Loading Page Actions", () => {
  before(() => {
    cy.visitHomePage();
  });

  it("should have hello world", () => {
    navigateToPage();
    validateNavigationToPage();
    selectExample(2);
    validateNavigationToExamplePage();
    clickStartButton();
    validateHelloWorld(10);
  });
});
