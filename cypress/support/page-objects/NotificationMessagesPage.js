/// <reference types="cypress"/>

//url endpoint
const ENDPOINT = "notification_message_rendered";

//page name
const NOTIFICATION_MESSAGES = "Notification Messages";

//selectors
const NOTIFICATION_ELEMENT = "#flash";
const NOTIFICATION_BUTTON = "p > a";

export const navigateToPage = () => {
  cy.navigateToTestPageByClick(NOTIFICATION_MESSAGES);
};

export const validateNavigation = () => {
  cy.validateNavigationByUrl(ENDPOINT);
};

export const clickNotificationButton = () => {
  cy.get(NOTIFICATION_BUTTON).should("include.text", "Click here").click();
};

export const clickAndValidateNotificationRepeats = (repeats) => {
  const iterations = new Array(repeats);
  cy.wrap(iterations).each((iteration, index) => {
    cy.log(`iteration number ${index + 1}`);
    clickNotificationButton();
    validateNotificationExistsAfterClick();
  });
};

export const validateNotificationExistsAfterClick = () => {
  cy.log("validating notification exists");
  cy.get(NOTIFICATION_ELEMENT)
    .should("exist")
    .invoke("text")
    .then((text) => {
      cy.log('validating notification text is valid');
      cy.log(`notification text is: ${text}`);
      let isValid =
        text.includes("Action successful") ||
        text.includes("Action unsuccesful")
          ? true
          : false;
      cy.wrap(isValid).should("be.true");
      cy.log("notification exists and text is valid");
    });
};
