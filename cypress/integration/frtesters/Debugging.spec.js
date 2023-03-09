describe('Debugging con Cypress', () =>{
    it('Ejemplo cy.log', () =>{
        Cy.visit('https://www.ejemplo.com')
        cy.log('Escribe el username')
        cy.get('#username').type("TomSmith")
        cy.log('Escribe el password')
        cy.get('#password').type('SuperPassword123')
        cy.get('form').contains('Login').click()
    })

    it('Ejemplo cy.pause', ()=>{
        cy.visit('https://www.ejemplo.com')
        cy.get('#username').type('TomSmith').pause()
        cy.get('#password').pause().type('SuperPassword123')
        cy.get('form').contains('Login').click()
        cy.url().should('contain','/secure').pause()
    })

    it('Ejemplo cy.debug', ()=>{
        cy.visit('https://www.ejemplo.com')
        cy.get('#username').type('TomSmith').pause()
        cy.get('#password').debug().type('SuperPassword123')
        cy.get('form').contains('Login').click()
        cy.url().should('contain','/secure').pause()
    })
})
