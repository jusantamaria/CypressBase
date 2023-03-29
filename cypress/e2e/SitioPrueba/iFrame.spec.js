describe('Iniciar sesión con cuenta de Microsoft', () =>{
    it('Valido credenciales', () =>{
        cy.get('#frame')
        .iframe('body #button-find-out-more > b')
        .should('include.text', 'Find Out More!')

    })
})