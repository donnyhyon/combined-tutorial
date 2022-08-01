describe('land webserver specs', () => {
  it('visits localhost 3000', () => {
    cy.visit('http://localhost:3000')
  })
  it("should have a title",()=>{
    cy.title().should('eq','GOV.UK - The best place to find government services and information')
  })
})