describe('TC-VIEW-ANNOUNCEMENT-DETAIL-3', () => {
    before(()=> cy.visit('/admin/announcement/1111')) ;
  
    it('The request page is not available',()=>{
        cy.wait(200)

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('The request page is not available')
        })
    }) ;
});