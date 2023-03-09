describe('Validaciones implicitas y explicitas', () => {
    beforeEach('Visitar página HerokuApp',() =>{
        cy.visit('https://the-internet.herokuapp.com/')
    })
    it('Validaciones Implicitas', () => {
        //Basicamente cuando se ua SHOULD
        cy.contains("Inputs").click()
        cy.get("h3").should('have.text','Inputs')
        cy.get(".example").should('have.class','example').and('be.visible')

    })
    it('Validaciones Explicitas', () => {
        cy.contains("Inputs").click()
        cy.get("h3").should('have.text','Inputs')
        expect('Inputs').to.equals('Inputs')
        
    })
    it('Espera a que las promesas se resuelvan', ()=>{
        let waited = false
        
        function  waitOneSecond() {
            //Devuelve una promesa que se da al pasar 1 segundo
            return new Cypress.Promise((resolve, reject) => {
                setTimeout(() =>{
                    //Ponemos el Waited en true
                    waited = true
                    //Resuelve con el string "foo"
                    resolve('foo')
                },1000)
            })
        }

        cy.wrap(null).then(() =>{
            // Devuelve una promesa a cy.then que es es esperada (waited) hasta que se resuelve
            return waitOneSecond().then((str) =>{
                expect(str).to.eq('foo')
                expect(waited).to.be.true
            })
        })
    })
})

//Visitar la documentacion de Cypress para mas  Assertions "https://docs.cypress.io/guides/references/assertions"