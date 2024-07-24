import {faker} from '@faker-js/faker'

describe('User signup flow', () => {
  

  it('Verify that the user can signup successfully', () => {
    cy.fixture('signup/selectors').then((data) =>{
      cy.clickSignupHomePageButton()
      cy.typeText(data.fullnameField, faker.person.fullName())
      cy.typeText(data.bizNameField, faker.company.buzzVerb())
      cy.typeText(data.bizEmailField, faker.internet.email())
      cy.typeText(data.bizPhoneNumberField, faker.phone.number('+234902######'))
      cy.typeText(data.bizRegField, 'BN3416291')
    })
    

      
      
      
      // cy.insertBusinessName()
      // cy.insertBusinessEmail()
      // cy.insertBizPhoneNum()
      // cy.insertBizRegNum()
      // cy.clickNextButton()
    })
    
    // cy.get('.Header2_header__nav__btn__wRKfY div:nth-child(2) button').should('be.visible').click()
    // cy.get('#fullname').should('be.visible').type('Oyindamola Test')
    // cy.get('#businessname').should('be.visible').type('Honey Test')
    // cy.get('#businessemail').should('be.visible').type(faker.internet.email())
    // cy.get('#businessphonenumber').should('be.visible').type('2347890706997')
    // cy.get('#businessRegNum').should('be.visible').type('BN3416291')
    // cy.get('button[type="button"]').should('be.visible').click()//nextbutton
    // cy.get('#website').should('be.visible').type('OyindamolaTest.com')
    // cy.get('#instagramHandle').should('be.visible').type('Oyindamola_Test')
    // cy.get('#twitterHandle').should('be.visible').type('Oyindamola_Test')
    // cy.get('div[placeholder]').should('be.visible').click()//dropdown button
    // cy.get('.MimaDropdown_select__options__xLi7K:nth-child(6)').should('be.visible').click()
    // cy.get('#password').should('be.visible').type('Pa$$word1')
    // cy.get('button[type="submit"]').should('be.visible').click()
  })
