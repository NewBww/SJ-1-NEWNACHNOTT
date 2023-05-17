describe('TC-PBI10-USER-VIEW-ANNOUNCEMENT-PAGE-2', () => {
  it('First page have 5 items', () => {
    cy.visit("/announcement")
    cy.wait(200);

    cy.get('.ann-item').should('have.length', 5)
  })

  it('First page should be "(PBI10) Title 60, (PBI10) Title 59,(PBI10) Title 58,(PBI10) Title 57,(PBI10) Title 56" ', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-item').first().as('ann-1')
    cy.get('@ann-1').contains('.ann-title', '(PBI10) Title 60')
    cy.get('@ann-1').contains('.ann-category', 'ทุนการศึกษา')

    cy.get('.ann-item').eq(1).as('ann-2')
    cy.get('@ann-2').contains('.ann-title', '(PBI10) Title 59')
    cy.get('@ann-2').contains('.ann-category', 'ทุนการศึกษา')

    cy.get('.ann-item').eq(2).as('ann-3')
    cy.get('@ann-3').contains('.ann-title', '(PBI10) Title 58')
    cy.get('@ann-3').contains('.ann-category', 'ทุนการศึกษา')

    cy.get('.ann-item').eq(3).as('ann-4')
    cy.get('@ann-4').contains('.ann-title', '(PBI10) Title 57')
    cy.get('@ann-4').contains('.ann-category', 'ทุนการศึกษา')

    cy.get('.ann-item').eq(4).as('ann-5')
    cy.get('@ann-5').contains('.ann-title', '(PBI10) Title 56')
    cy.get('@ann-5').contains('.ann-category', 'ทุนการศึกษา')
  })

  it('When click "Close Annoucement" button the lable of button should change to "Active Announcement"', () => {
    cy.visit("/announcement")
    cy.wait(200)

    cy.get('.ann-button',).contains(/close/g, { matchCase: false }).should('exist').click()
    cy.wait(200)

    cy.get('.ann-button').contains(/active/g, { matchCase: false })
  })

  it('First page of close announcement should have 2 items', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-button').contains(/close/g, { matchCase: false }).should('exist').click()
    cy.wait(200);

    cy.get('.ann-item').should('have.length', 2)

    cy.get('.ann-item').first().as('ann-1')
    cy.get('@ann-1').contains('.ann-title', '(PBI10) Title 62')
    cy.get('@ann-1').contains('.ann-category', 'หางาน')
    cy.get('@ann-1').contains('.ann-close-date', '1 May 2023')
    cy.get('@ann-1').contains('.ann-close-date', '18:00')

    cy.get('.ann-item').eq(1).as('ann-2')
    cy.get('@ann-2').contains('.ann-title', '(PBI10) Title 61')
    cy.get('@ann-2').contains('.ann-close-date', '1 May 2023')
    cy.get('@ann-2').contains('.ann-close-date', '18:00')
  })

  it('The page navigator does not display because the number of rows is less than or equal to 5', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-button').contains(/close/g, { matchCase: false }).should('exist').click()
    cy.wait(200);

    cy.get('.ann-page-prev').should('not.exist')
    cy.get('.ann-page-1').should('not.exist')
    cy.get('.ann-page-next').should('not.exist')
  })

  it('Check the detail of first item. When clicking back, the mode is still closed.', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-button').contains(/close/g, { matchCase: false }).should('exist').click()
    cy.wait(200);

    cy.get('.ann-item').get('.ann-title').first().contains('(PBI10) Title 62').click()
    cy.wait(500)

    cy.get('.ann-title').contains('(PBI10) Title 62')
    cy.get('.ann-category').contains('หางาน')
    cy.get('.ann-description').contains('(PBI10) Description 62')
    cy.get('.ann-close-date').contains('1 May 2023')
    cy.get('.ann-close-date').contains('18:00')

    cy.get('.ann-button').contains('back',{matchCase: false}).should('exist').click()
    cy.wait(500)

    cy.get('.ann-item').should('have.length', 2)
    cy.get('.ann-button').contains(/active/g, { matchCase: false })
  })
})