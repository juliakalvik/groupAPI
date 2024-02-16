// cypress/integration/server.spec.js

describe('Express.js Server Tests', () => {
    // Test GET request to the homepage
    it('Visits the homepage', () => {
      cy.request('http://127.0.0.1:8090/api/collections/books/records')
        .its('body')
        .should('deep.equal', {
          message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
        });
    });
  
    // Test GET request to retrieve all books
    it('Gets all books', () => {
      cy.request('/books')
        .its('status')
        .should('equal', 200);
    });
  
    // Test POST request to add a new book
    it('Adds a new book', () => {
      cy.request('POST', '/books', {
        title: 'Test Book',
        author: 'Test Author',
        year: 2022
      })
        .its('status')
        .should('equal', 200);
    });
  
    // Test DELETE request to delete a book
    it('Deletes a book', () => {
      // First, add a new book to delete it later
      cy.request('POST', '/books', {
        title: 'Test Book to Delete',
        author: 'Test Author',
        year: 2022
      }).then((response) => {
        const newBookId = response.body.message.split(' ')[1]; // Extract the ID of the newly added book
        cy.request('DELETE', `/books?id=${newBookId}`)
          .its('status')
          .should('equal', 200);
      });
    });
  });
  