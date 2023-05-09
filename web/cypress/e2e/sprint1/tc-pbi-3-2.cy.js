describe('TC-VIEW-ANNOUNCEMENT-DETAIL-2', () => {
  it('should contain SAS and Timezone',()=>{
    cy.visit('/admin/announcement')
    cy.contains('SAS') ;
    cy.contains('Timezone') ;
  }) 

  it('Last item should be "บริษัท เน็ตเซอร์พลัส จำกัด รับสมัครงาน 2 ตำแหน่ง" and should have "view".',()=>{
    cy.visit('/admin/announcement')

    cy.wait(200) ;
    cy.get('.ann-item').as('ann-items')
    cy.get('@ann-items').should('have.length',4)
    cy.get('@ann-items').last().as('ann-1')
    cy.get('@ann-1').get('.ann-title').contains('บริษัท เน็ตเซอร์พลัส จำกัด รับสมัครงาน 2 ตำแหน่ง')
    cy.get('@ann-1').contains('view')
  }) 

  it('should show detail of "บริษัท เน็ตเซอร์พลัส จำกัด รับสมัครงาน 2 ตำแหน่ง" and should have "Back" button.',()=>{
    cy.visit('/admin/announcement')
    
    cy.wait(200) ;
    cy.get('.ann-item').as('ann-items')
    cy.get('@ann-items').should('have.length',4)
    cy.get('@ann-items').last().as('ann-1')
    cy.get('@ann-1').contains('view').click()

    cy.wait(200) ;
    cy.get('.ann-title').contains('บริษัท เน็ตเซอร์พลัส จำกัด รับสมัครงาน 2 ตำแหน่ง')
    cy.get('.ann-description').contains('บริษัท เน็ตเซอร์พลัส จำกัด เปิดรับสมัครงาน 2 ตำแหน่ง Application Support และ Customer Support')
    cy.get('.ann-category').contains('หางาน')
    cy.get('.ann-publish-date').contains('-')
    cy.get('.ann-close-date').contains('-')
    cy.get('.ann-display').contains('N')
    cy.get('.ann-button').contains('Back')
    cy.get('.ann-button').contains('Back')
  })
  
});