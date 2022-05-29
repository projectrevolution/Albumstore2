describe('App component', () => {
  it('should have Hello World', () => {
    cy.visit('http://localhost:4200')
    cy.get('h1').contains('Hello World')
  })
})


