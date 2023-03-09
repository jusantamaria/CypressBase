describe('Pruebas en APIs con Cypress', () =>{
    it("El endpoint 'posts' responde con el status 200", () => {
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts'
        }).then((respuesta)=>{
            expect(respuesta.status).to.eq(200)
        })
    })
    it("El endpoint 'posts' tiene 100 entradas", () => {
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts')
        .its('body')
        .should('have.length', 100)
    })
    it('El post numero 1 tiene por titulo "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"', () => {
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts/1')
        .its('body')
        .should('have.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })
    it('El POST request funciona correctamente para el endpoint', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            userId: 1,
            id: 101,
            title:'Relatos Salvajes',
            body:'Una pelicula argentina'
        }).then((respuesta) => {
            expect(respuesta.body).to.have.property('title','Relatos Salvajes')
        })
    })
    //El PUT es un resultado idempotente, quiere decir que el resultado siempre va a ser el mismo no importa cuantas veces lo carguemos
    it('El PUT request funciona correctamente para el endpoint', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/2', {
            title:'Relatos Salvajes',
            body:'Una pelicula argentina'
        }).then((respuesta) => {
            expect(respuesta.body).to.have.property('title','Relatos Salvajes')
        })
    })
    it('El DELETE request funciona correctamente para el endpoint', () => {
        cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/2')
    })
})