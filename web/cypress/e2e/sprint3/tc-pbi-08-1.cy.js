describe('TC-PBI8-USER-VIEW-ANNOUNCEMENT-1', () => {
  it('should have announcement items of 4', () => {
    cy.visit("/announcement")
    cy.wait(200);
    cy.get('.ann-item').should('have.length', 4)
  })

  it('First item should be "(PBI8-9) Title 8"', () => {
    cy.visit("/announcement")
    cy.get('.ann-item').first().as('ann-1')
    cy.get('@ann-1').contains('.ann-title', '(PBI8-9) Title 8')
    cy.get('@ann-1').contains('.ann-category', 'ทุนการศึกษา')
  })

  it('Last item should be "(PBI8-9) Title 1"', () => {
    cy.visit("/announcement")
    cy.get('.ann-item').last().as('ann-1')
    cy.get('@ann-1').contains('.ann-title','(PBI8-9) Title 1')
    cy.get('@ann-1').contains('.ann-category','ทั่วไป')
  });

  it('Check data in first row detail', () => {
    cy.visit("/announcement")
    cy.get('.ann-item').get('.ann-title').first().contains('(PBI8-9) Title 8').click()

    cy.wait(200)
    cy.get('.ann-title').contains('(PBI8-9) Title 8')
    cy.get('.ann-category').contains('ทุนการศึกษา')
    cy.get('.ann-description').contains('(PBI8-9) Descripition 8')

    cy.get('.ann-button').click()
    cy.get('.ann-item').should('have.length', 4)
  });
})