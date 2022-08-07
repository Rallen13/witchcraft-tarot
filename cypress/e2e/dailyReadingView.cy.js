describe("Daily Reading View", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1",
      {
        fixture: "singleCard",
      }
    );
    cy.visit("http://localhost:3000/daily-reading");
  });

  afterEach(() => {
    cy.visit("http://localhost:3000/daily-reading");
  });

  it("should contain a heading", () => {
    cy.dataCy("daily-reading-view-heading").contains("Daily Reading");
  });

  it("should contain an instruction block", () => {
    cy.dataCy("instruction-block")
      .contains("Pick a card")
      .dataCy("instruction-block")
      .contains(
        "What does the future have in store for you? Now is time to discover the day's possibilities!"
      );
  });

  it("should display back of a card on render", () => {
    cy.dataCy("daily-card-container").within(() => {
      cy.dataCy("tarot-back").should("have.length", 1);
    });
  });

  it("should be able to click on card and see card summary", () => {
    cy.dataCy("daily-card-container").within(() => {
      cy.dataCy("tarot-back")
        .click()
        .dataCy("card-summary")
        .dataCy("card-summary-img")
        .should("have.length", 1)
        .dataCy("card-summary-name")
        .contains("The Magician")
        .dataCy("card-summary-type")
        .contains("major arcana")
        .dataCy("instruction-block")
        .should("have.length", 2)
        .dataCy("spacer")
        .should("have.length", 1);
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
