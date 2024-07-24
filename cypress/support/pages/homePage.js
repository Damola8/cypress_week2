class HomePage{
    clickLoginHomePageButton(){
        cy.get('.Header2_header__nav__btn__wRKfY div:nth-child(1) button').should('be.visible').click()
}
    clickSignupHomePageButton(){
        cy.get('.Header2_header__nav__btn__wRKfY div:nth-child(2) button').should('be.visible').click()

    }

    clickAnyElement(){
        cy.get('element').should('be.visible').click()
    }
}

export default HomePage()