/** BOOKS TESTS */

const url = "http://localhost:3000"

describe('Express.js Server Tests', () => {
  // Test GET request to the homepage
  it('Visits the homepage', () => {
    cy.request('http://localhost:8090/api/collections/books/records')
      .its('body')
      });
  });

  // Test GET request to retrieve all books
  it('Gets all books', () => {
    cy.request('http://localhost:8090/api/collections/books/records')
      .its('status')
      .should('equal', 200);
  });

  // Test GET request to retrieve a single book
  it('Gets a single book', () => {
    cy.request('GET', 'http://localhost:8090/api/collections/books/records?id=rdd43d450a71074')
      .its('status')
      .should('equal', 200);
  });

  // Test POST request to add a new book
  it('Adds a new book', () => {
    cy.request('POST', 'http://localhost:8090/api/collections/books/records', {
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
  cy.request('POST', 'http://localhost:8090/api/collections/books/records', {
    title: 'Test Book to Delete',
    author: 'Test Author',
    year: 2022
  }).then((response) => {
    // Check if the response body contains the expected properties
    if (response.body && response.body.id) {
      const newBookId = response.body.id; // Use the correct property name for the book ID
      cy.request('DELETE', `http://localhost:8090/api/collections/books/records/${newBookId}`)
        .its('status')
        .should('equal', 204);
    } else {
      // Handle the case where the expected properties are not found in the response body
      throw new Error('Response body does not contain the expected properties');
    }
  });
});

  describe('Express.js Server Tests', () => {
      // Test GET request to fetch records from the books collection
      it('Fetches records from the books collection', () => {
          cy.request('GET', 'http://localhost:8090/api/collections/books/records')
              .then((response) => {
                  expect(response.status).to.eq(200);
                  // Assert on the response body as needed
              });
      });
  });
  

  /** USERS TESTS */

  describe('Express.js Server Tests - users2', () => {
    // Test GET request to retrieve all users
    it('Gets all users', () => {
      cy.request('GET', 'http://localhost:8090/api/collections/users2/records')
        .its('status')
        .should('equal', 200);
    });
  
    // Test GET request to retrieve a single user
    it('Gets a single user', () => {
      cy.request('GET', 'http://localhost:8090/api/collections/users2/records?id=r7108163bdc14fa')
        .its('status')
        .should('equal', 200);
    });

// Test DELETE request to delete a user
it('Creates a new user and deletes it', () => {
  // First, add a new user to delete it later
  cy.request('POST', 'http://localhost:8090/api/collections/users2/records', {
    username: 'alitest2',
    password: 'password123',
    passwordConfirm: 'password123', 
    email: 'alitest2@example.com'
  }).then((response) => {

    // Now delete the user using the same id that you got back
      const newUserId = response.body.id; 
      console.log("user id", newUserId)
      cy.request('DELETE', `http://localhost:8090/api/collections/users2/records/${newUserId}`)
        .its('status')
        .should('equal', 204);
  });
});


});



