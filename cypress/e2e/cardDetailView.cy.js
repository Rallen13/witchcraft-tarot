describe("Card Detail View", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rws-cards-api.herokuapp.com/api/v1/cards/search?q=ar01",
      {
        fixture: "singleCard",
      }
    );
    cy.visit("http://localhost:3000/explore/ar01");
  });

  afterEach(() => {
    cy.visit("http://localhost:3000/explore/ar01");
  });

  it("should contain a heading", () => {
    cy.dataCy("card-detail-view-heading").contains("Card Details");
  });

  it("should be able to see a card summary and description", () => {
    cy.dataCy("card-detail-container").within(() => {
      cy.dataCy("card-summary")
        .dataCy("card-summary-img")
        .should("have.length", 1)
        .dataCy("card-summary-name")
        .contains("The Magician")
        .dataCy("card-summary-type")
        .contains("major arcana")
        .dataCy("instruction-block")
        .should("have.length", 3)
        .dataCy("spacer")
        .should("have.length", 1);
    });
  });

  it("should contain 1 spacers under the card summary and description", () => {
    cy.dataCy("spacer").should("have.length", 1);
  });

  it("should contain a learn more component", () => {
    cy.dataCy("learn-more")
      .contains("Want to learn more about all the major & minor arcana cards?")
      .dataCy("learn-more-button")
      .click()
      .url()
      .should("include", "/explore");
  });
});
