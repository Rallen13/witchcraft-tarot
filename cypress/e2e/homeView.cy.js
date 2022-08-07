describe("Home view page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  afterEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display a title in the navigation bar", () => {
    cy.dataCy("logo").contains("Witch").contains("Craft").contains("Tarot");
  });

  it("should route you home when the logo is clicked", () => {
    cy.dataCy("logo").click().url().should("include", "/");
  });

  it("should contain a menu in the navigation bar", () => {
    cy.dataCy("menu")
      .click()
      .dataCy("swipeable-drawer")
      .contains("Explore The Deck")
      .dataCy("swipeable-drawer")
      .contains("Daily Reading")
      .dataCy("swipeable-drawer")
      .contains("3-Card Spread");
  });

  it("should contain a heading", () => {
    cy.dataCy("home-view-heading")
      .contains("Now is the time")
      .contains("Ours is the magic");
  });

  it("should contain a paragraph", () => {
    cy.dataCy("home-view-paragraph").contains(
      "Starting each day with this Tarot reading is a terrific way to get psyched for all the possibilities—and avoid possible pitfalls. Get your reading and obtain insight for the day ahead!"
    );
  });

  it("should route you to daily reading when 'Daily Reading' button is clicked", () => {
    cy.dataCy("daily-reading-button")
      .contains("Daily Reading")
      .click()
      .url()
      .should("include", "/daily-reading");
  });

  it("should route you to 3-card spread when '3-Card Spread' button is clicked", () => {
    cy.dataCy("3-card-spread-button")
      .contains("3-Card Spread")
      .click()
      .url()
      .should("include", "/3-card-spread");
  });

  it("should contain 3 spacers", () => {
    cy.dataCy("spacer").should("have.length", 3);
  });

  it("should contain a second heading", () => {
    cy.dataCy("home-view-heading2").contains("Before you begin");
  });

  it("should contain a section", () => {
    cy.dataCy("home-view-section")
      .dataCy("instruction-block")
      .should("have.length", 10);
  });

  it("should route you to daily reading when 'Daily Reading' button is clicked", () => {
    cy.dataCy("daily-reading-button2")
      .contains("Daily Reading")
      .click()
      .url()
      .should("include", "/daily-reading");
  });

  it("should route you to 3-card spread when '3-Card Spread' button is clicked", () => {
    cy.dataCy("3-card-spread-button2")
      .contains("3-Card Spread")
      .click()
      .url()
      .should("include", "/3-card-spread");
  });

  it("should contain a learn more component", () => {
    cy.dataCy("learn-more")
      .contains("Want to learn more about all the major & minor arcana cards?")
      .dataCy("learn-more-button")
      .click()
      .url()
      .should("include", "/explore");
  });

  it("should contain a footer", () => {
    cy.dataCy("footer")
      .dataCy("git-hub-link")
      .should(
        "have.attr",
        "href",
        "https://github.com/Rallen13/witchcraft-tarot"
      );
  });
});
