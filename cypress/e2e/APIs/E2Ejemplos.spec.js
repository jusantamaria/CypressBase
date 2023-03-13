describe('Loguear basic Auth y auth con Forms', () => {
    it('Sin loguear', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text','Congratulations')
    })
    it('Loguear usando Auth de Cypress', () =>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            auth:{
            username: 'admin',
            password: 'admin'
            }
        })
        cy.get('p').should('include.text','Congratulations')
    })
    it('Loguea con credenciales en la URL del Visit', () =>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text','Congratulations')
    })
    it('Hago un login en el Form usando un requets del tipo POST', () => {
        cy.visit('https://the-internet.herokuapp.com')
        cy.request({
            method: 'POST',
            url:'/authenticate',
            form: true,
            body: {
                username: 'tomsmith',
                password: 'SuperSecretPassword!',
            }
        })
        cy.getCookie('rack.session').should('exist')
        cy.visit('https://the-internet.herokuapp.com/secure')
        cy.get('.subheader').should('include.text','Welcome to the Secure Area')
    })
    it('Mismo test de arriba pero con el login como comando personalizado', () =>{
        cy.login()
        cy.get('.subheader').should('include.text','Welcome to the Secure Area')
    })
})