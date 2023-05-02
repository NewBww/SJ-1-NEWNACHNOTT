describe('TC-VIEW-ANNOUNCEMENT-EMPTY-1', () => {
  beforeEach(()=> cy.visit('/admin/announcement')) ;

  it('should contain SAS and Timezone',()=>{
    cy.contains('SAS') ;
    cy.contains('Timezone') ;
  }) ;

  it('should not have any announcement',()=>{

    cy.wait(200) ;
    cy.get('.ann-item').should('have.length',0)
    cy.contains('No Announcement')
  })
});
