describe('User signup flow', () => {
  
  it('Verify that the user can signup successfully', () => {
    cy.visit('/')
    cy.get('.Header2_header__nav__btn__wRKfY div:nth-child(2) button').should('be.visible').click
    cy.get('#fullname'),should('be.visible').click
    cy.get('#businessname').should('be.visible').type('Honey Test')
    cy.get('#businessemail').should('be.visible').type('Oyintest@yopmail.com')
    cy.get('#businessphonenumber').should('be.visible').type('2347890706997')
    cy.get('#businessRegNum').should('be.visible').type('BN3416291')
    cy.get('button[type="button"]').should('be.visible').click//nextbutton
    cy.get('#website').should('be.visible').type('Oyindamola Test')
    cy.get('#instagramHandle').should('be.visible').type('Oyindamola Test')
    cy.get('#twitterHandle').should('be.visible').type('Oyindamola Test')
    cy.get('div[placeholder]'),should('be.visible').click//dropdowm button
    cy.get('.MimaDropdown_select__options__xLi7K:nth-child(6)').should('be.visible').click
    cy.get('#fullname').should('be.visible').type('Oyindamola Test')
    cy.get('#password').should('be.visible').type('Pa$$word1')
    cy.get('button[type="submit"]').should('be.visible').click
  })
})