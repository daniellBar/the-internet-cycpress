/// <reference types="cypress"/>

import {
  navigateToPage,
  validateNavigation,
  scanForTypos,
} from "../support/page-objects/TyposPage.js";

describe("Typos Page Actions", () => {
  before(() => {
    cy.visitHomePage();
  });

  it("should scan for typos", () => {
    navigateToPage();
    validateNavigation();
    scanForTypos();
  });
});
