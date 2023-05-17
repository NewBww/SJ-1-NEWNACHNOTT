describe('[Advisor] TC-UPDATE-ANNOUNCEMENT-3: normal - update category and display', () => {

    it('Add an announcement "(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65"',()=>{
        cy.visit('/admin/announcement/add')

        cy.get('.ann-title').type("(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65")
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

    it('should contain the announcement "(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65"',()=>{
        cy.visit('/admin/announcement')

        cy.wait(200)
        cy.get('.ann-item').should('contain.text','(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65').first()
    })

    it('should have view button and click the view button and have edit button"',()=>{
        cy.visit('/admin/announcement')

        cy.wait(200)
        cy.get('.ann-item').should('contain.text','(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65').first().as('ann-1')
        cy.get('@ann-1').get('.ann-button').contains('view',{matchCase: false}).should('exist').click()

        cy.wait(200) ;
        cy.get('.ann-title').contains('(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65')
        cy.get('.ann-button').contains('edit',{matchCase: false}).should('exist')
    })

    it('should click edit and have a form to edit data and the submit button is disable"',()=>{
        cy.visit('/admin/announcement')

        cy.wait(200)
        cy.get('.ann-item').should('contain.text','(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65').first().as('ann-1')
        cy.get('@ann-1').get('.ann-button').contains('view',{matchCase: false}).should('exist').click()

        cy.wait(200) ;
        cy.get('.ann-title').contains('(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65')
        cy.get('.ann-button').contains('edit',{matchCase: false}).should('exist').click()

        cy.wait(200)
        cy.get('.ann-button').contains(/submit|save|update|add|edit/g,{matchCase: false}).should('exist').as('ann-submit')
        cy.get('@ann-submit').should('be.disabled')
    })

    it('should have pre-filled data in form',()=>{
        cy.visit('/admin/announcement')

        cy.wait(200)
        cy.get('.ann-item').should('contain.text','(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65').first().as('ann-1')
        cy.get('@ann-1').get('.ann-button').contains('view',{matchCase: false}).should('exist').click()

        cy.wait(200) ;
        cy.get('.ann-title').contains('(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65')
        cy.get('.ann-button').contains('edit',{matchCase: false}).should('exist').click()

        cy.wait(200)
        cy.get('.ann-title').should('have.value','(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65')
        cy.get('.ann-category').contains('หางาน')
        cy.get('.ann-description').should('have.value','หลักสูตรขอแจ้งตารางสอบปลายภาค (ร่าง) 2/65 โดยนักศึกษาที่สอบซ้อนในวันเดียวกัน ขอให้แจ้งกลับมาที่พี่ตุ๊ก ภายในวันที่ 8 พ.ค. 66')
        cy.get('.ann-publish-date').should('have.value','2023-05-03')
        cy.get('.ann-publish-time').should('have.value','06:00')
        cy.get('.ann-close-date').should('not.have.value')
        cy.get('.ann-close-time').should('not.have.value')
        cy.get('.ann-display').should('not.be.checked')
    })

    it('should update category and display and should enable submit button',()=>{
        cy.visit('/admin/announcement')

        cy.wait(200)
        cy.get('.ann-item').should('contain.text','(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65').first().as('ann-1')
        cy.get('@ann-1').get('.ann-button').contains('view',{matchCase: false}).should('exist').click()

        cy.wait(200) ;
        cy.get('.ann-title').contains('(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65')
        cy.get('.ann-button').contains('edit',{matchCase: false}).should('exist').click()

        cy.wait(200)
        cy.get('.ann-category').select('ทั่วไป')
        cy.get('.ann-display').check({force:true})
        cy.get('.ann-button').contains(/submit|save|update|add|edit/g,{matchCase: false}).should('exist').as('ann-submit')
        cy.get('@ann-submit').should('be.enabled')
    })

    it('should update category and display and should submit data',()=>{
        cy.visit('/admin/announcement')

        cy.wait(200)
        cy.get('.ann-item').should('contain.text','(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65').first().as('ann-1')
        cy.get('@ann-1').get('.ann-button').contains('view',{matchCase: false}).should('exist').click()

        cy.wait(200) ;
        cy.get('.ann-title').contains('(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65')
        cy.get('.ann-button').contains('edit',{matchCase: false}).should('exist').click()

        cy.wait(200)
        cy.get('.ann-category').select('ทั่วไป')
        cy.get('.ann-display').check({force:true})
        cy.get('.ann-button').contains(/submit|save|update|add|edit/g,{matchCase: false}).should('exist').as('ann-submit')
        cy.get('@ann-submit').should('be.enabled')
        cy.get('@ann-submit').should('exist').click()
        cy.wait(200)
    })

    it('should show the updated data in both listing and detail page .',()=>{
        cy.visit('/admin/announcement')

        cy.wait(200)
        cy.get('.ann-item').should('contain.text','(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65').first().as('ann-1')
        cy.get('@ann-1').get('.ann-publish-date').contains('3 May 2023',{matchCase: false})
        cy.get('@ann-1').get('.ann-publish-date').contains('06:00')
        cy.get('@ann-1').get('.ann-close-date').contains('-')
        cy.get('@ann-1').get('.ann-display').contains('Y')
        cy.wait(200)
        cy.get('@ann-1').get('.ann-button').contains('view',{matchCase: false}).should('exist').click()

        cy.wait(200) ;
        cy.get('.ann-title').contains('(PBI7-3)ประกาศ (ร่าง) ตารางสอบปลายภาค 2/65')
        cy.get('.ann-description').contains('หลักสูตรขอแจ้งตารางสอบปลายภาค (ร่าง) 2/65 โดยนักศึกษาที่สอบซ้อนในวันเดียวกัน ขอให้แจ้งกลับมาที่พี่ตุ๊ก ภายในวันที่ 8 พ.ค. 66')
        cy.get('.ann-category').contains('ทั่วไป')
        cy.get('.ann-publish-date').contains('3 May 2023',{matchCase: false})
        cy.get('.ann-publish-date').contains('06:00')
        cy.get('.ann-close-date').contains('-')
        cy.get('.ann-display').contains('Y')
    })

})