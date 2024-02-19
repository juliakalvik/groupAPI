describe('template spec', () => {
  it('passes', () => {
    cy.request('http://127.0.0.1:8090/api/collections/books/records').then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
