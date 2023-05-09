describe('TC-VIEW-ANNOUNCEMENT-EMPTY-2', () => {
    beforeEach(()=> cy.visit('/admin/announcement')) ;
  
    it('should contain SAS and Timezone',()=>{
      cy.contains('SAS') ;
      cy.contains('Timezone') ;
    }) ;

    it('should have announcement and should not display "No Announcement".',()=>{
      cy.wait(200)
      cy.get('.ann-item').should('not.have.length',0)
      cy.should('not.include.text','No Announcement')
    })
});