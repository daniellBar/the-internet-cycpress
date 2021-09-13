/// <reference types="cypress"/>

//url endpoint
const ENDPOINT = "drag_and_drop";

//page name
const DRAG_AND_DROP = "Drag and Drop";

//selectors
const SQUARE_A = "#column-a";
const SQUARE_B = "#column-b";

// inputs to element map
const INPUTS_TO_ELEMENTS = { A: SQUARE_A, B: SQUARE_B };

export const navigateToPage = () => {
  cy.navigateToTestPageByClick(DRAG_AND_DROP);
};

export const validateNavigation = () => {
  cy.validateNavigationByUrl(ENDPOINT);
};

export const dragAndDrop = (elementToDrag, dropTo) => {
  cy.log(`dragging element ${elementToDrag} to ${dropTo}`);
  cy.get(INPUTS_TO_ELEMENTS[elementToDrag]).drag(INPUTS_TO_ELEMENTS[dropTo]);
};

export const validateDragAndDrop = (droppedElement, droppedTo) => {
  cy.log(`validating  ${droppedElement} moved to ${droppedTo}`);
  cy.get(INPUTS_TO_ELEMENTS[droppedTo])
    .find("header")
    .should("have.text", droppedElement);
  cy.log("drag and drop was successful");
};
