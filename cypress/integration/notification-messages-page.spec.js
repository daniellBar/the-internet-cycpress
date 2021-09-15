import {
  navigateToPage,
  validateNavigation,
  clickNotificationButton,
  validateNotificationExistsAfterClick,
  clickAndValidateNotificationRepeats,
} from "../support/page-objects/NotificationMessagesPage.js";

describe("Notification Message Page Actions", () => {
  context(
    "testing by repeat the it block 5 times using a repeat option from lodash",
    () => {
      before(() => {
        cy.visitHomePage();
        navigateToPage();
        validateNavigation();
      });

      Cypress._.times(5, () => {
        it("notification should exist after each button click", () => {
          clickNotificationButton();
          validateNotificationExistsAfterClick();
        });
      });
    }
  );

  context(
    "testing using my own functions which gets a number of iterations to click button and validate notification",
    () => {
      before(() => {
        cy.visitHomePage();
      });
      it("notification should exist after each button click", () => {
        navigateToPage();
        validateNavigation();
        clickAndValidateNotificationRepeats(5);
      });
    }
  );
});
