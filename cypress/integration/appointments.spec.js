describe("Appointments", () => {
  it("should book an interview", () => {
    cy.request("GET", "/api/debug/reset")
    cy.visit("/");
    cy.contains("Monday");
    cy.get("[alt=Add]")
      .first()
      .click();
    // cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");
    // cy.get("[alt='Sylvia Palmer']").click();
    // cy.contains("Save").click();
  });
});