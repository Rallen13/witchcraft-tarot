describe("3-Card Spread View", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3",
      {
        fixture: "threeCard",
      }
    );
    cy.visit("http://localhost:3000/3-card-spread");
  });

  afterEach(() => {
    cy.visit("http://localhost:3000/3-card-spread");
  });

  it("should contain a heading", () => {
    cy.dataCy("3-card-spread-view-heading").contains("3-Card Spread");
  });

  it("should contain an instruction block", () => {
    cy.dataCy("instruction-block")
      .contains("Pick Three Cards")
      .dataCy("instruction-block")
      .contains(
        "This spread may seem simple, but it's also very versatile. You can use the cards to denote past, present, and future, or, situation, action, and outcome. If you're doing a relationship reading, you can even designate the first card as yourself, the second as your partner (or potential partner), and the third as the relationship between you both. Just don't change the parameters of the inquiry mid-reading!"
      );
  });

  it("should display the back of 3 cards on render", () => {
    cy.dataCy("card-container").within(() => {
      cy.dataCy("tarot-back").should("have.length", 3);
    });
  });

  it("should be able to click on all three cards and see card summaries", () => {
    cy.dataCy("card-container").within(() => {
      cy.dataCy("tarot-back")
        .click({ multiple: true })
        .dataCy("card-summary")
        .dataCy("card-summary-img")
        .should("have.length", 3)
        .dataCy("card-summary-name")
        .should("have.length", 3)
        .dataCy("card-summary-type")
        .should("have.length", 3)
        .dataCy("instruction-block")
        .should("have.length", 6)
        .dataCy("spacer")
        .should("have.length", 3);
    });
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
