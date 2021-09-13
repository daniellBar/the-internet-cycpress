/// <reference types="cypress"/>

const URL = "/basic_auth";

export const requestPage = (creds = null) => {
  const { username, password } = { ...creds };
  if (username && password) {
    cy.log(
      `requesting page with credentials. username: ${username}, password: ${password}`
    );
    return cy.basicAuthRequestWithCreds(URL, username, password);
  }
  cy.log(`requesting page without credentials`);
  return cy.basicAuthRequest(URL);
};

export const validateStatusCode = (response, statusCode) => {
  response.its("status").then((_status) => {
    const status = _status;
    cy.log(`validating returned status code equals ${statusCode}`);
    cy.wrap(status).should("equal", statusCode);
  });
};

export const navigateToPageWithCreds = (creds) => {
  const { username, password } = { ...creds };
  cy.log(
    `navigating to page with credentials. username: ${username}, password: ${password}`
  );
  cy.visitWithAuth(URL, username, password);
};

export const validateOnPage = () => {
  cy.log(`validating navigation to page`);
  cy.contains(" Congratulations! You must have the proper credentials.");
  cy.log(`navigation successful`);
};
