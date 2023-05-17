describe('TC-PBI10-USER-VIEW-ANNOUNCEMENT-PAGE-2', () => {
  it('First page have 5 items, category should have display "ทั้งหมด", button "Prev" is disable, button "Next" is enable', () => {
    cy.visit("/announcement")
    cy.wait(500);
    cy.get('.ann-item').should('have.length', 5)

    cy.get('.ann-item').first().as('ann-1')
    cy.get('@ann-1').get('.ann-title').contains('(PBI10) Title 60')
    cy.get('@ann-1').get('.ann-category').contains('ทุนการศึกษา')

    cy.get('.ann-item').eq(1).as('ann-2')
    cy.get('@ann-2').get('.ann-title').contains('(PBI10) Title 59')
    cy.get('@ann-2').get('.ann-category').contains('ทุนการศึกษา')

    cy.get('.ann-item').eq(1).as('ann-3')
    cy.get('@ann-3').get('.ann-title').contains('(PBI10) Title 58')
    cy.get('@ann-3').get('.ann-category').contains('ทุนการศึกษา')

    cy.get('.ann-item').eq(1).as('ann-4')
    cy.get('@ann-4').get('.ann-title').contains('(PBI10) Title 57')
    cy.get('@ann-4').get('.ann-category').contains('ทุนการศึกษา')

    cy.get('.ann-item').eq(1).as('ann-5')
    cy.get('@ann-5').get('.ann-title').contains('(PBI10) Title 56')
    cy.get('@ann-5').get('.ann-category').contains('ทุนการศึกษา')

    cy.get('.ann-category-filter').contains("ทั้งหมด")

    cy.get('.ann-page-prev', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/prev/g, { matchCase: false })
      .should('exist')
      .should('be.disabled');

    cy.get('.ann-page-next', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/next/g, { matchCase: false })
      .should('exist')
      .should('be.enabled');
  })

  it('Page number has range 1 to 10', () => {
    cy.visit("/announcement")

    cy.get('.ann-page-0').contains('1');
    cy.get('.ann-page-1').contains('2');
    cy.get('.ann-page-2').contains('3');
    cy.get('.ann-page-3').contains('4');
    cy.get('.ann-page-4').contains('5');
    cy.get('.ann-page-5').contains('6');
    cy.get('.ann-page-6').contains('7');
    cy.get('.ann-page-7').contains('8');
    cy.get('.ann-page-8').contains('9');
    cy.get('.ann-page-9').contains('10')
  });

  it('Category "ทั่วไป" should have 5 items', () => {
    cy.visit("/announcement")

    cy.get('.ann-category-filter').select("ทั่วไป",{force: true})
    cy.wait(500)

    cy.get('.ann-item').first().as('ann-1')
    cy.get('@ann-1').get('.ann-title').contains('(PBI10) Title 30')
    cy.get('@ann-1').get('.ann-category').contains('ทั่วไป')

    cy.get('.ann-item').eq(1).as('ann-2')
    cy.get('@ann-2').get('.ann-title').contains('(PBI10) Title 29')
    cy.get('@ann-2').get('.ann-category').contains('ทั่วไป')

    cy.get('.ann-item').eq(1).as('ann-3')
    cy.get('@ann-3').get('.ann-title').contains('(PBI10) Title 28')
    cy.get('@ann-3').get('.ann-category').contains('ทั่วไป')

    cy.get('.ann-item').eq(1).as('ann-4')
    cy.get('@ann-4').get('.ann-title').contains('(PBI10) Title 27')
    cy.get('@ann-4').get('.ann-category').contains('ทั่วไป')

    cy.get('.ann-item').eq(1).as('ann-5')
    cy.get('@ann-5').get('.ann-title').contains('(PBI10) Title 26')
    cy.get('@ann-5').get('.ann-category').contains('ทั่วไป')

    cy.get('.ann-category-filter').contains("ทั่วไป")

    cy.get('.ann-page-prev', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/prev/g, { matchCase: false })
      .should('exist')
      .should('be.disabled');

    cy.get('.ann-page-next', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/next/g, { matchCase: false })
      .should('exist')
      .should('be.enabled');
  })

  it('Page number has range 1 to 6', () => {
    cy.visit("/announcement")

    cy.wait(500)
    cy.get('.ann-category-filter').select("ทั่วไป",{force: true})

    cy.wait(500)
    cy.get('.ann-page-0').contains('1');
    cy.get('.ann-page-1').contains('2');
    cy.get('.ann-page-2').contains('3');
    cy.get('.ann-page-3').contains('4');
    cy.get('.ann-page-4').contains('5');
    cy.get('.ann-page-5').contains('6');
  });

  it('Page 3 with category "ทั่วไป"', () => {
    cy.visit("/announcement")
    cy.wait(500)
    
    cy.get('.ann-category-filter').select("ทั่วไป",{force: true})
    cy.wait(500)

    cy.get('.ann-page-2').click()
    cy.wait(500)

    cy.get('.ann-item').first().as('ann-1')
    cy.get('@ann-1').get('.ann-title').contains('(PBI10) Title 20')
    cy.get('@ann-1').get('.ann-category').contains('ทั่วไป')

    cy.get('.ann-item').eq(1).as('ann-2')
    cy.get('@ann-2').get('.ann-title').contains('(PBI10) Title 19')
    cy.get('@ann-2').get('.ann-category').contains('ทั่วไป')

    cy.get('.ann-item').eq(1).as('ann-3')
    cy.get('@ann-3').get('.ann-title').contains('(PBI10) Title 18')
    cy.get('@ann-3').get('.ann-category').contains('ทั่วไป')

    cy.get('.ann-item').eq(1).as('ann-4')
    cy.get('@ann-4').get('.ann-title').contains('(PBI10) Title 17')
    cy.get('@ann-4').get('.ann-category').contains('ทั่วไป')

    cy.get('.ann-item').eq(1).as('ann-5')
    cy.get('@ann-5').get('.ann-title').contains('(PBI10) Title 16')
    cy.get('@ann-5').get('.ann-category').contains('ทั่วไป')
    cy.get('.ann-category-filter').contains("ทั่วไป")

    cy.get('.ann-page-prev', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/prev/g, { matchCase: false })
      .should('exist')
      .should('be.enabled');

    cy.get('.ann-page-next', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/next/g, { matchCase: false })
      .should('exist')
      .should('be.enabled');
  });

  it('Page number has range 1 to 6', () => {
    cy.visit("/announcement")
    cy.wait(500)

    cy.get('.ann-category-filter').select("ทั่วไป",{force: true})
    cy.wait(500)

    cy.get('.ann-page-2').click()
    cy.wait(500)

    cy.get('.ann-page-0').contains('1');
    cy.get('.ann-page-1').contains('2');
    cy.get('.ann-page-2').contains('3');
    cy.get('.ann-page-3').contains('4');
    cy.get('.ann-page-4').contains('5');
    cy.get('.ann-page-5').contains('6');

  });

  it('Click "Close Announcements" button page 3 with category "ทั่วไป" should not have any announcement', () => {
    cy.visit("/announcement")
    cy.wait(500)

    cy.get('.ann-category-filter').select("ทั่วไป",{force: true})
    cy.wait(500)

    cy.get('.ann-page-3').click()
    cy.wait(500)

    cy.get('.ann-button').contains(/close/g, { matchCase: false })
      .should('exist')
      .should('be.visible')
      .click();
    cy.wait(500)

    cy.get('.ann-button').contains(/active/g, { matchCase: false })
    cy.wait(500)

    cy.contains('No Announcement')

    cy.get('.ann-page-prev').should('not.exist')
    cy.get('.ann-page-1').should('not.exist')
    cy.get('.ann-page-next').should('not.exist')
  });

  it('Category หางาน with close announcement should have 2 items', () => {
    cy.visit("/announcement")
    cy.wait(500)

    cy.get('.ann-category-filter').select("ทั่วไป",{force: true})
    cy.wait(500)

    cy.get('.ann-page-2').click()
    cy.wait(500)

    cy.get('.ann-button').contains(/close/g, { matchCase: false })
      .should('exist')
      .should('be.visible')
      .click();
    cy.wait(500)

    cy.get('.ann-category-filter').select("หางาน",{force: true})
    cy.wait(500)

    cy.get('.ann-item').should('have.length', 2)

    cy.get('.ann-item').first().as('ann-1')
    cy.get('@ann-1').get('.ann-title').contains('(PBI10) Title 62')
    cy.get('@ann-1').get('.ann-category').contains('หางาน')

    cy.get('.ann-item').eq(1).as('ann-2')
    cy.get('@ann-2').get('.ann-title').contains('(PBI10) Title 61')
    cy.get('@ann-2').get('.ann-category').contains('หางาน')

    cy.get('.ann-category-filter').contains("หางาน")
    cy.get('.ann-page-prev').should('not.exist')
    cy.get('.ann-page-0').should('not.exist')
    cy.get('.ann-page-next').should('not.exist')
  })

  it('Category หางาน with active announcement should have 2 items', () => {
    cy.visit("/announcement")
    cy.wait(500)

    cy.get('.ann-category-filter').select("ทั่วไป",{force: true})
    cy.wait(500)

    cy.get('.ann-page-2').click()
    cy.wait(500)

    cy.get('.ann-button').contains(/close/g, { matchCase: false })
      .should('exist')
      .should('be.visible')
      .click();
    cy.wait(500)

    cy.get('.ann-category-filter').select("หางาน",{force: true})
    cy.wait(500)

    cy.get('.ann-button').contains(/active/g, { matchCase: false })
      .should('exist')
      .should('be.visible')
      .click();
    cy.wait(500)
    
    cy.get('.ann-category-filter').contains("หางาน")
    cy.get('.ann-page-prev').should('not.exist')
    cy.get('.ann-page-0').should('not.exist')
    cy.get('.ann-page-next').should('not.exist')

    cy.contains('No Announcement');
  })

});