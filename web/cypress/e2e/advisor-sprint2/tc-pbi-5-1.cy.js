describe('[Advisor] TC-CREATE-ANNOUNCEMENT-1: normal - nominal data', () => {
  
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

    it('should have add button and click to open url => /admin/announcement/add',()=>{
        cy.visit('/admin/announcement')
        
        cy.wait(200)
        cy.get('.ann-button').contains('add',{matchCase: false}).should('exist').click()
        cy.url().should('contain','/admin/announcement/add')
    })

    it('should open add form and add a new announcment',()=>{
        
        cy.visit('/admin/announcement/add')

        cy.get('.ann-title').type("(PBI5-1)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65")
        cy.get('.ann-category').select('หางาน')
        cy.get('.ann-description').type('หลักสูตรขอแจ้งตารางสอบปลายภาค (ร่าง) 2/65 โดยนักศึกษาที่สอบซ้อนในวันเดียวกัน ขอให้แจ้งกลับมาที่พี่ตุ๊ก ภายในวันที่ 8 พ.ค. 66')
        cy.get('.ann-publish-date').type('2023-05-03')
        cy.get('.ann-publish-time').type('06:00')
        cy.get('.ann-button').contains(/submit|save|update|add|edit/g,{matchCase: false}).should('exist').click()
        cy.wait(200)
    })

    it('should show the new announcement "ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65"',()=>{
        cy.visit('/admin/announcement')
        
        cy.get('.ann-item').first().as('ann-1')
        cy.get('@ann-1').get('.ann-title').contains('(PBI5-1)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65')
        cy.get('@ann-1').get('.ann-category').contains('หางาน')
        cy.get('@ann-1').get('.ann-publish-date').contains('3 May 2023')
        cy.get('@ann-1').get('.ann-publish-date').contains('6:00')
        cy.get('@ann-1').get('.ann-close-date').contains('-')
        cy.get('@ann-1').get('.ann-display').contains('N')
    })

    it('should show the complete detail of "(PBI5-1)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65"',()=>{
        cy.visit('/admin/announcement')
        
        cy.get('.ann-item').first().as('ann-1')
        cy.get('@ann-1').contains('view',{matchCase: false}).should('exist').click()
        cy.wait(200) ;
        cy.get('.ann-title').contains('(PBI5-1)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65')
        cy.get('.ann-description').contains('หลักสูตรขอแจ้งตารางสอบปลายภาค (ร่าง) 2/65 โดยนักศึกษาที่สอบซ้อนในวันเดียวกัน ขอให้แจ้งกลับมาที่พี่ตุ๊ก ภายในวันที่ 8 พ.ค. 66')
        cy.get('.ann-category').contains('หางาน')
        cy.get('.ann-publish-date').contains('3 May 2023')
        cy.get('.ann-publish-date').contains('6:00')
        cy.get('.ann-close-date').contains('-')
        cy.get('.ann-display').contains('N')
        cy.get('.ann-button').contains('Back',{matchCase: false}).should('exist')
    })
  });
  