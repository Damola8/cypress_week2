import {faker} from '@faker-js/faker'
Cypress.Commands.add('insertFullName', (email, password) => { 
    cy.fixture('signup/selectors').then(data =>{
        cy.get(data.fullnameField).should('be.visible').type(faker.person.fullName)
    })
 })

Cypress.Commands.add('insertBusinessName', (email, password) => { 
    cy.fixture('signup/selectors').then(data =>{
        cy.get(data.bizNameField).should('be.visible').type(faker.company.buzzVerbverb)
    }) 
})

Cypress.Commands.add('insertBusinessEmail', (email, password) => { 
    cy.fixture('signup/selectors').then(data =>{
        cy.get(data.bizEmailField).should('be.visible').type(faker.internet.email)
    }) 
})

Cypress.Commands.add('insertBizPhoneNum', (email, password) => { 
    cy.fixture('signup/selectors').then(data =>{
        cy.get(data.bizPhoneNumberField).should('be.visible').type(faker.phone.number('+23490########'))
    }) 
})
Cypress.Commands.add('insertBizRegNum', (email, password) => { 
    cy.fixture('signup/selectors').then(data =>{
        cy.get(data.bizRegField).should('be.visible').type('BN3412961')
    }) 
})

Cypress.Commands.add('clickNextButton', (email, password) => { 
    cy.fixture('signup/selectors').then(data =>{
        cy.get('button[type="button"]').should('be.visible').click()
    })
})

