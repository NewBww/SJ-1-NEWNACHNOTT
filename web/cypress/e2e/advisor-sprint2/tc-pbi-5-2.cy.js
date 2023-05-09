describe('[Advisor] TC-CREATE-ANNOUNCEMENT-2: nomal - at boundary data', () => {
  
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

        cy.get('.ann-title').type("AAAAAAAA-BBBBBBBB-CCCCCCCC-DDDDDDDD-EEEEEEEE-FFFFFFFF-GGGGGGGG-HHHHHHHH-IIIIIIII-JJJJJJJJ-KKKKKKKK-LLLLLLLL-MMMMMMMM-NNNNNNNN-OOOOOOOO-PPPPPPPP-QQQQQQQQ-RRRRRRRR-SSSSSSSS-TTTTTTTT-UUUUUUUU-VVVVVVVV---")
        cy.get('.ann-category').select('ฝึกงาน')
        const text = Cypress._.repeat('กขฃคฅฆงจฉชซณญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษ-', 250)
        cy.get('.ann-description').type(text).blur()
        cy.get('.ann-publish-date').type('2023-05-08')
        cy.get('.ann-publish-time').type('06:00')
        cy.get('.ann-button').contains(/submit|save|update|add|edit/g,{matchCase: false}).should('exist').click()
        cy.wait(200)
    })

    it('should show the new announcement "AAAAAAAA-BBBBBBBB-CCCCCCCC-....."',()=>{
        cy.visit('/admin/announcement')
        
        cy.get('.ann-item').first().as('ann-1')
        cy.get('@ann-1').get('.ann-title').contains('AAAAAAAA-BBBBBBBB-CCCCCCCC-DDDDDDDD-EEEEEEEE-FFFFFFFF-GGGGGGGG-HHHHHHHH-IIIIIIII-JJJJJJJJ-KKKKKKKK-LLLLLLLL-MMMMMMMM-NNNNNNNN-OOOOOOOO-PPPPPPPP-QQQQQQQQ-RRRRRRRR-SSSSSSSS-TTTTTTTT-UUUUUUUU-VVVVVVVV---')
        cy.get('@ann-1').get('.ann-category').contains('ฝึกงาน')
        cy.get('@ann-1').get('.ann-publish-date').contains('8 May 2023')
        cy.get('@ann-1').get('.ann-publish-date').contains('6:00')
        cy.get('@ann-1').get('.ann-close-date').contains('-')
        cy.get('@ann-1').get('.ann-display').contains('N')
    })
  });
  