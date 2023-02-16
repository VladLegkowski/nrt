context('End to end test for the application', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('text', () => {
    describe('main page text', () => {
      it('assert text on the page', () => {
        cy.contains(/hello world/i).should('exist');
      });
    });
  });
});
