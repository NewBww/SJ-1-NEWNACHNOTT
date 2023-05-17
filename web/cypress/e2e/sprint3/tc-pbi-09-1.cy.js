describe('TC-PBI9-USER-VIEW-ANNOUNCEMENT-CLOSE-1', () => {
    it('should have announcement items of 4',()=>{
        cy.visit("/announcement")
        cy.wait(200) ;
        cy.get('.ann-item').should('have.length',4)
      })
    

      it('Click "Close Announcement" button',()=>{
        cy.visit("/announcement")
        cy.wait(200);
        cy.get('.ann-button').click()
        cy.get('.ann-item').should('have.length',2)
      }) ;

      it('First item should be "(PBI8-9) Title 5"',()=>{
        cy.visit("/announcement")
        cy.get(".ann-button").click()

        cy.get('.ann-item').first().as('ann-1')
        cy.get('@ann-1').contains('.ann-title','(PBI8-9) Title 5')
        cy.get('@ann-1').contains('.ann-category','ทุนการศึกษา')
        cy.get('@ann-1').contains('.ann-close-date','2 May 2023')
        cy.get('@ann-1').contains('.ann-close-date','18:00')
      })
  
      it('Last item should be "(PBI8-9) Title 4"',()=>{
        cy.visit("/announcement")
        cy.get(".ann-button").click()

        cy.get('.ann-item').last().as('ann-1')
        cy.get('@ann-1').contains('.ann-title','(PBI8-9) Title 4')
        cy.get('@ann-1').contains('.ann-category','ทั่วไป')
        cy.get('@ann-1').contains('.ann-close-date','1 May 2023')
        cy.get('@ann-1').contains('.ann-close-date','18:00')
      }) ;

      it('Check data in first row detail click "back" to close announcement list page',()=>{
        cy.visit("/announcement")
        cy.get(".ann-button").click()
        cy.get('.ann-item').get('.ann-title').first().contains('(PBI8-9) Title 5').click()
        
        cy.wait(200)
        cy.get('.ann-title').contains('(PBI8-9) Title 5')
        cy.get('.ann-category').contains('ทุนการศึกษา')
        cy.get('.ann-description').contains('(PBI8-9) Descripition 5')
        cy.get('.ann-close-date').contains('2 May 2023')
        cy.get('.ann-close-date').contains('18:00')

        cy.get('.ann-button').click()
        cy.get('.ann-item').should('have.length',2)
      }) ;
})