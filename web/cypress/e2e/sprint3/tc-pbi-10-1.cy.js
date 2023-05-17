describe('TC-PBI10-USER-VIEW-ANNOUNCEMENT-PAGE-1', () => {
  it('First page have 5 items', () => {
    cy.visit("/announcement")
    cy.wait(200);
    cy.get('.ann-item').should('have.length', 5)
  })

  it('First page should be "(PBI10) Title 60, (PBI10) Title 59,(PBI10) Title 58,(PBI10) Title 57,(PBI10) Title 56" ', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-item').first().as('ann-1')
    cy.get('@ann-1').contains('.ann-title','(PBI10) Title 60')
    cy.get('@ann-1').contains('.ann-category','ทุนการศึกษา')

    cy.get('.ann-item').eq(1).as('ann-2')
    cy.get('@ann-2').contains('.ann-title','(PBI10) Title 59')
    cy.get('@ann-2').contains('.ann-category','ทุนการศึกษา')

    cy.get('.ann-item').eq(2).as('ann-3')
    cy.get('@ann-3').contains('.ann-title','(PBI10) Title 58')
    cy.get('@ann-3').contains('.ann-category','ทุนการศึกษา')

    cy.get('.ann-item').eq(3).as('ann-4')
    cy.get('@ann-4').contains('.ann-title','(PBI10) Title 57')
    cy.get('@ann-4').contains('.ann-category','ทุนการศึกษา')

    cy.get('.ann-item').eq(4).as('ann-5')
    cy.get('@ann-5').contains('.ann-title','(PBI10) Title 56')
    cy.get('@ann-5').contains('.ann-category','ทุนการศึกษา')
  })

  it('"Prev" button is disable, "Next" button is enable', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-page-prev', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/prev/g, { matchCase: false })
      .should('exist')
      .should('be.disabled');

    cy.get('.ann-page-next', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/next/g, { matchCase: false })
      .should('exist')
      .should('be.enabled');
  });

  it('Page number has range 10', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-page-0');
    cy.get('.ann-page-1');
    cy.get('.ann-page-2');
    cy.get('.ann-page-3');
    cy.get('.ann-page-4');
    cy.get('.ann-page-5');
    cy.get('.ann-page-6');
    cy.get('.ann-page-7');
    cy.get('.ann-page-8');
    cy.get('.ann-page-9');
  });


  it('Second page should be "(PBI10) Title 55, (PBI10) Title 54,(PBI10) Title 53,(PBI10) Title 52,(PBI10) Title 51" ', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-page-1').click();
    cy.wait(500);

    cy.get('.ann-item').first().as('ann-1')
    cy.get('@ann-1').contains('.ann-title','(PBI10) Title 55')
    cy.get('@ann-1').contains('.ann-category','ทุนการศึกษา')

    cy.get('.ann-item').eq(1).as('ann-2')
    cy.get('@ann-2').contains('.ann-title','(PBI10) Title 54')
    cy.get('@ann-2').contains('.ann-category','ทุนการศึกษา')

    cy.get('.ann-item').eq(2).as('ann-3')
    cy.get('@ann-3').contains('.ann-title','(PBI10) Title 53')
    cy.get('@ann-3').contains('.ann-category','ทุนการศึกษา')

    cy.get('.ann-item').eq(3).as('ann-4')
    cy.get('@ann-4').contains('.ann-title','(PBI10) Title 52')
    cy.get('@ann-4').contains('.ann-category','ทุนการศึกษา')

    cy.get('.ann-item').eq(4).as('ann-5')
    cy.get('@ann-5').contains('.ann-title','(PBI10) Title 51')
    cy.get('@ann-5').contains('.ann-category','ทุนการศึกษา')
  })

  it('"Prev" button is enable, "Next" button is enable', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-page-1').click();
    cy.wait(500);

    cy.get('.ann-page-prev', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/prev/g, { matchCase: false })
      .should('exist')
      .should('be.enabled');

    cy.get('.ann-page-next', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/next/g, { matchCase: false })
      .should('exist')
      .should('be.enabled');
  });

  it('Page number has range 10', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-page-1').click();
    cy.wait(500);

    cy.get('.ann-page-0');
    cy.get('.ann-page-1');
    cy.get('.ann-page-2');
    cy.get('.ann-page-3');
    cy.get('.ann-page-4');
    cy.get('.ann-page-5');
    cy.get('.ann-page-6');
    cy.get('.ann-page-7');
    cy.get('.ann-page-8');
    cy.get('.ann-page-9');
  });

  it('Tenth page should be "(PBI10) Title 14, (PBI10) Title 13,(PBI10) Title 12,(PBI10) Title 11,(PBI10) Title 10" ', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-page-9').click();
    cy.wait(500);

    cy.get('.ann-item').first().as('ann-1')
    cy.get('@ann-1').contains('.ann-title','(PBI10) Title 14')
    cy.get('@ann-1').contains('.ann-category','ทั่วไป')

    cy.get('.ann-item').eq(1).as('ann-2')
    cy.get('@ann-2').contains('.ann-title','(PBI10) Title 13')
    cy.get('@ann-2').contains('.ann-category','ทั่วไป')

    cy.get('.ann-item').eq(2).as('ann-3')
    cy.get('@ann-3').contains('.ann-title','(PBI10) Title 12')
    cy.get('@ann-3').contains('.ann-category','ทั่วไป')

    cy.get('.ann-item').eq(3).as('ann-4')
    cy.get('@ann-4').contains('.ann-title','(PBI10) Title 11')
    cy.get('@ann-4').contains('.ann-category','ทั่วไป')

    cy.get('.ann-item').eq(4).as('ann-5')
    cy.get('@ann-5').contains('.ann-title','(PBI10) Title 10')
    cy.get('@ann-5').contains('.ann-category','ทั่วไป')
  })

  it('"Prev" button is enable, "Next" button is enable', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-page-9').click();
    cy.wait(500);

    cy.get('.ann-page-prev', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/prev/g, { matchCase: false })
      .should('exist')
      .should('be.enabled');

    cy.get('.ann-page-next', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/next/g, { matchCase: false })
      .should('exist')
      .should('be.enabled');
  });

  it('Page number has range 10', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-page-9').click();
    cy.wait(500);

    cy.get('.ann-page-0');
    cy.get('.ann-page-1');
    cy.get('.ann-page-2');
    cy.get('.ann-page-3');
    cy.get('.ann-page-4');
    cy.get('.ann-page-5');
    cy.get('.ann-page-6');
    cy.get('.ann-page-7');
    cy.get('.ann-page-8');
    cy.get('.ann-page-9');
  });

  it('Next page should be "(PBI10) Title 9, (PBI10) Title 8,(PBI10) Title 7,(PBI10) Title 6,(PBI10) Title 5" ', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-page-9').click();
    cy.wait(500);

    cy.get('.ann-page-next').click();
    cy.wait(500);

    cy.get('.ann-item').first().as('ann-1')
    cy.get('@ann-1').contains('.ann-title','(PBI10) Title 9')
    cy.get('@ann-1').contains('.ann-category','ทั่วไป')

    cy.get('.ann-item').eq(1).as('ann-2')
    cy.get('@ann-2').contains('.ann-title','(PBI10) Title 8')
    cy.get('@ann-2').contains('.ann-category','ทั่วไป')

    cy.get('.ann-item').eq(2).as('ann-3')
    cy.get('@ann-3').contains('.ann-title','(PBI10) Title 7')
    cy.get('@ann-3').contains('.ann-category','ทั่วไป')

    cy.get('.ann-item').eq(3).as('ann-4')
    cy.get('@ann-4').contains('.ann-title','(PBI10) Title 6')
    cy.get('@ann-4').contains('.ann-category','ทั่วไป')

    cy.get('.ann-item').eq(4).as('ann-5')
    cy.get('@ann-5').contains('.ann-title','(PBI10) Title 5')
    cy.get('@ann-5').contains('.ann-category','ทั่วไป')
  })

  it('"Prev" button is enable, "Next" button is enable', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-page-9').click();
    cy.wait(500);

    cy.get('.ann-page-next').click();
    cy.wait(500);

    cy.get('.ann-page-prev', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/prev/g, { matchCase: false })
      .should('exist')
      .should('be.enabled');

    cy.get('.ann-page-next', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/next/g, { matchCase: false })
      .should('exist')
      .should('be.enabled');
  });


  it('Page number has range 2 to 11', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-page-9').click();
    cy.wait(500);

    cy.get('.ann-page-next').click();
    cy.wait(500);

    cy.get('.ann-page-0').contains('2');
    cy.get('.ann-page-1').contains('3');
    cy.get('.ann-page-2').contains('4');
    cy.get('.ann-page-3').contains('5');
    cy.get('.ann-page-4').contains('6');
    cy.get('.ann-page-5').contains('7');
    cy.get('.ann-page-6').contains('8');
    cy.get('.ann-page-7').contains('9');
    cy.get('.ann-page-8').contains('10');
    cy.get('.ann-page-9').contains('11')
  });

  it('Next page should be "(PBI10) Title 4, (PBI10) Title 3,(PBI10) Title 2,(PBI10) Title 1,(PBI10) Title 0" ', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-page-9').click();
    cy.wait(500);

    cy.get('.ann-page-next').click();
    cy.wait(500);

    cy.get('.ann-page-next').click();
    cy.wait(500);

    cy.get('.ann-item').first().as('ann-1')
    cy.get('@ann-1').contains('.ann-title','(PBI10) Title 4')
    cy.get('@ann-1').contains('.ann-category','ทั่วไป')

    cy.get('.ann-item').eq(1).as('ann-2')
    cy.get('@ann-2').contains('.ann-title','(PBI10) Title 3')
    cy.get('@ann-2').contains('.ann-category','ทั่วไป')

    cy.get('.ann-item').eq(2).as('ann-3')
    cy.get('@ann-3').contains('.ann-title','(PBI10) Title 2')
    cy.get('@ann-3').contains('.ann-category','ทั่วไป')

    cy.get('.ann-item').eq(3).as('ann-4')
    cy.get('@ann-4').contains('.ann-title','(PBI10) Title 1')
    cy.get('@ann-4').contains('.ann-category','ทั่วไป')

    cy.get('.ann-item').eq(4).as('ann-5')
    cy.get('@ann-5').contains('.ann-title','(PBI10) Title 0')
    cy.get('@ann-5').contains('.ann-category','ทั่วไป')
  })

  it('"Prev" button is enable, "Next" button is diaable', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-page-9').click();
    cy.wait(500);

    cy.get('.ann-page-next').click();
    cy.wait(500);

    cy.get('.ann-page-next').click();
    cy.wait(500);

    cy.get('.ann-page-prev', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/prev/g, { matchCase: false })
      .should('exist')
      .should('be.enabled');

    cy.get('.ann-page-next', { timeout: 10000 }) // รอจนกว่าจะเจอ element นานสุด 10 วินาที
      .contains(/next/g, { matchCase: false })
      .should('exist')
      .should('be.disabled');
  });


  it('Page number has range 3 to 12', () => {
    cy.visit("/announcement")
    cy.wait(500);

    cy.get('.ann-page-9').click() ;
    cy.wait(500);

    cy.get('.ann-page-next').click();
    cy.wait(500);

    cy.get('.ann-page-next').click();
    cy.wait(500);

    cy.get('.ann-page-0').contains('3');
    cy.get('.ann-page-1').contains('4');
    cy.get('.ann-page-2').contains('5');
    cy.get('.ann-page-3').contains('6');
    cy.get('.ann-page-4').contains('7');
    cy.get('.ann-page-5').contains('8');
    cy.get('.ann-page-6').contains('9');
    cy.get('.ann-page-7').contains('10');
    cy.get('.ann-page-8').contains('11');
    cy.get('.ann-page-9').contains('12')

  });
})