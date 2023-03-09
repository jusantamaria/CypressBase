describe('Comandos Cypress', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })
    it('Ejemplo de click', () => {
        cy.contains('Add/Remove Elements').click()
        cy.get('button').click()
        cy.contains('Delete').click()
    })
    it('Ejemplo de escritura', () => {
        cy.contains("Form Authentication").click()
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('.fa').click()
    })
    it('Ejemplo de Checkboxes', () => {
        cy.contains("Checkboxes").click()
        cy.get('#checkboxes > :nth-child(1)').check()
        cy.get('#checkboxes > :nth-child(3)').uncheck()    
    })
    it('Ejemplo Dropdown', () => {
        cy.contains("Dropdown").click()
        cy.get('#dropdown').select(1)   
    })
    it('Ejemplo Clear', () => {
        cy.contains("Form Authentication").click()
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('#password').clear()
        cy.get('.fa').click()
    })
    it('Ejemplo Hover', () => {
        cy.contains("Hovers").click()
        cy.get('#content > div > div:nth-child(4) > div > a').invoke("show")
       
    })
    it('Ejemplo Right CLick', () => {
        cy.contains("Context Menu").click()
        //Forma 1
        cy.get('#hot-spot').rightclick()
        //Forma 2
        cy.get('#hot-spot').invoke('trigger','contextmenu')
        cy.on("window:alert",(alert)=>{
            expect(alert).to.equal("You selected a context menu")
        })
    })
    
})