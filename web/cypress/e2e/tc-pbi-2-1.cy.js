describe('TC-VIEW-ANNOUNCEMENT-ALL-2', () => {
    beforeEach(()=> cy.visit('/admin/announcement')) ;
  
    it('should contain SAS and Timezone',()=>{
      cy.contains('SAS') ;
      cy.contains('Timezone') ;
    })
  
    it('should have announcement items of 4',()=>{
      cy.wait(200) ;
      cy.get('.ann-item').should('have.length',4)
    })

    it('First item should be "กิจกรรมพี่อ้อย พี่ฉอด On Tour 2566"',()=>{
      cy.get('.ann-item').first().as('ann-1')
      cy.get('@ann-1').get('.ann-title').contains('กิจกรรมพี่อ้อย พี่ฉอด On Tour 2566')
      cy.get('@ann-1').get('.ann-category').contains('ทั่วไป')
      cy.get('@ann-1').get('.ann-publish-date').contains('19 Apr 2023')
      cy.get('@ann-1').get('.ann-publish-date').contains('6:00')
      cy.get('@ann-1').get('.ann-close-date').contains('8 May 2023')
      cy.get('@ann-1').get('.ann-close-date').contains('18:00')
      cy.get('@ann-1').get('.ann-display').contains('Y')
    })

    it('Last item should be "บริษัท เน็ตเซอร์พลัส จำกัด รับสมัครงาน 2 ตำแหน่ง"',()=>{
      cy.get('.ann-item').last().as('ann-1')
      cy.get('@ann-1').get('.ann-title').contains('บริษัท เน็ตเซอร์พลัส จำกัด รับสมัครงาน 2 ตำแหน่ง')
      cy.get('@ann-1').get('.ann-category').contains('หางาน')
      cy.get('@ann-1').get('.ann-publish-date').contains('-')
      cy.get('@ann-1').get('.ann-close-date').contains('-')
      cy.get('@ann-1').get('.ann-display').contains('N')
    }) ;
});
  
  