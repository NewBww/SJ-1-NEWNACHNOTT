describe('[Advisor] TC-DELETE-ANNOUNCEMENT-1: normal - cancel delete operation', () => {

    it('Add an announcement "(PBI6-1)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65"',()=>{
        cy.visit('/admin/announcement/add')

        cy.get('.ann-title').type("(PBI6-1)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65")
        cy.get('.ann-category').select('หางาน')
        cy.get('.ann-description').type('หลักสูตรขอแจ้งตารางสอบปลายภาค (ร่าง) 2/65 โดยนักศึกษาที่สอบซ้อนในวันเดียวกัน ขอให้แจ้งกลับมาที่พี่ตุ๊ก ภายในวันที่ 8 พ.ค. 66')
        cy.get('.ann-publish-date').type('2023-05-03')
        cy.get('.ann-publish-time').type('06:00')
        cy.get('.ann-button').contains(/submit|save|update|add|edit/g,{matchCase: false}).should('exist').click()
        cy.wait(200)
    }) ;

    it('should contain SAS and Timezone',()=>{
        cy.visit('/admin/announcement')
  
        cy.contains('SAS') ;
        cy.contains('Timezone') ;
    }) ;

    it('should have announcement and should not display "No Announcement".',()=>{
        cy.visit('/admin/announcement')

        cy.wait(200)
        cy.get('.ann-item').should('not.have.length',0)
        cy.should('not.include.text','No Announcement')
    })

    it('should contain the announcement "(PBI6-1)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65"',()=>{
        cy.visit('/admin/announcement')

        cy.wait(200)
        cy.get('.ann-item').should('contain.text','(PBI6-1)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65').first()
    })

    it('should have delete button and click the delete button"',()=>{
        cy.visit('/admin/announcement')

        cy.wait(200)
        cy.get('.ann-item').should('contain.text','(PBI6-1)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65').first().as('ann-delete')
        cy.get('@ann-delete').get('.ann-button').contains('delete',{matchCase: false}).should('exist').click()

        cy.on("window:confirm", (message) => {
            expect(message).to.contain("Do you want to delete");
            return false;
        });
    })

})
  