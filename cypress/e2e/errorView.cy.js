describe("Error View", () => {
  it("Should display error for a broken URL", () => {
    cy.visit("http://localhost:3000/1")
      .dataCy("error-heading")
      .contains("I bind you from accessing this page, from doing harm...");
  });

  it("Should display error message when getAllCards api throws a server error", () => {
    cy.intercept("GET", "https://rws-cards-api.herokuapp.com/api/v1/cards", {
      forceNetworkError: true,
    }).as("getNetworkFailure");
    cy.visit("http://localhost:3000/explore");
    cy.wait("@getNetworkFailure")
      .dataCy("error-heading")
      .contains("I bind you from accessing this page, from doing harm...");
  });

  it("Should display error message when getRandomCards api for daily reading throws a server error", () => {
    cy.intercept(
      "GET",
      "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1",
      {
        forceNetworkError: true,
      }
    ).as("getNetworkFailure");
    cy.visit("http://localhost:3000/daily-reading");
    cy.wait("@getNetworkFailure")
      .dataCy("error-heading")
      .contains("I bind you from accessing this page, from doing harm...");
  });

  it("Should display error message when getRandomCards api for 3-card spread throws a server error", () => {
    cy.intercept(
      "GET",
      "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3",
      {
        forceNetworkError: true,
      }
    ).as("getNetworkFailure");
    cy.visit("http://localhost:3000/3-card-spread");
    cy.wait("@getNetworkFailure")
      .dataCy("error-heading")
      .contains("I bind you from accessing this page, from doing harm...");
  });

  it("Should display error message when getSearchCards api for card details view throws a server error", () => {
    cy.intercept(
      "GET",
      "https://rws-cards-api.herokuapp.com/api/v1/cards/search?q=cupa",
      {
        forceNetworkError: true,
      }
    ).as("getNetworkFailure");
    cy.visit("http://localhost:3000/explore/cupa");
    cy.wait("@getNetworkFailure")
      .dataCy("error-heading")
      .contains("I bind you from accessing this page, from doing harm...");
  });

});
