describe('TC-VIEW-ANNOUNCEMENT-DETAIL-1', () => {
      
      it('should contain SAS and Timezone',()=>{
        cy.visit('/admin/announcement')
        cy.contains('SAS') ;
        cy.contains('Timezone') ;
      }) 
  
      it('First item should be "กิจกรรมพี่อ้อย พี่ฉอด On Tour 2566" and should have "view".',()=>{
        cy.visit('/admin/announcement')

        cy.wait(200) ;
        cy.get('.ann-item').as('ann-items')
        cy.get('@ann-items').should('have.length',4)
        cy.get('@ann-items').first().as('ann-1')
        cy.get('@ann-1').get('.ann-title').contains('กิจกรรมพี่อ้อย พี่ฉอด On Tour 2566')
        cy.get('@ann-1').contains('view')
      }) 

      it('should show detail of "กิจกรรมพี่อ้อย พี่ฉอด On Tour 2566" and should have "Back" button.',()=>{
        cy.visit('/admin/announcement')
        
        cy.wait(200) ;
        cy.get('.ann-item').as('ann-items')
        cy.get('@ann-items').should('have.length',4)
        cy.get('@ann-items').first().as('ann-1')
        cy.get('@ann-1').contains('view').click()

        cy.wait(200) ;
        cy.get('.ann-title').contains('กิจกรรมพี่อ้อย พี่ฉอด On Tour 2566')
        cy.get('.ann-description').contains('ขอเชิญนักศึกษาทุกชั้นปี เข้าร่วมกิจกรรมพี่อ้อย พี่ฉอด On Tour')
        cy.get('.ann-category').contains('ทั่วไป')
        cy.get('.ann-publish-date').contains('19 Apr 2023')
        cy.get('.ann-publish-date').contains('6:00')
        cy.get('.ann-close-date').contains('8 May 2023')
        cy.get('.ann-close-date').contains('18:00')
        cy.get('.ann-display').contains('Y')
        cy.get('.ann-button').contains('Back')
      })
});