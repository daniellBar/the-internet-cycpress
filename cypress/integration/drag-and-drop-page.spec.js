/// <reference types="cypress"/>

import {
  navigateToPage,
  validateNavigation,
  dragAndDrop,
  validateDragAndDrop,
} from "../support/page-objects/DragAndDropPage.js";

describe("Drag and Drop Page Actions", () => {
  beforeEach(() => {
    cy.visitHomePage();
  });

  it("should drag A to B", () => {
    navigateToPage();
    validateNavigation();
    dragAndDrop("A", "B");
    validateDragAndDrop("A", "B");
  });

  it("should drag B to A", () => {
    navigateToPage();
    validateNavigation();
    dragAndDrop("B", "A");
    validateDragAndDrop("B", "A");
  });
});
