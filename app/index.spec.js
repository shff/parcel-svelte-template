context("Window", () => {
  it("contains the expected text", () => {
    cy.visit("dist/");
    cy.get("body").contains("Hello World");
  });
});
