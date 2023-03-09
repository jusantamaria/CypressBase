describe('Pruebas sobre UI', () =>{
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Nueva pestaña', () =>{
        cy.contains("Multiple Windows").click()
        cy.contains('Click Here').invoke('removeAttr','target').click()
        cy.contains('New Window').should('have.text','New Window')
    })
    it('Primer y ultimo elemento', () => {
        cy.contains('Dynamic Content').click()
        cy.get('img').first().should('be.visible')
        cy.get('img').last().should('be.visible')
        cy.get('img').eq(2).should('be.visible')
    })
    it('Padres e hijos', () => {
        cy.contains('Dynamic Content').click()
        cy.get(':nth-child(4) > .large-2 > img').parent()
        cy.get('.example > :nth-child(7)').children()
    })
    it('Invoke', () => {
        cy.contains('Dynamic Content')
        .should('be.visible')
        .invoke('show')
        .should('be.hidden')
    })

})