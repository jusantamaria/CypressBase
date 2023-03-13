describe('Tablas estáticas y dinámicas', () => {

    // it('Validamos texto en una tabla estatica', () => {
    //     //Navegando a la web de tabla
    //     cy.visit('https://www.hispanosnba.com/clasificacion-nba')
    //     // Ubicamos la primer columna 
    //     cy.get('#tblcla responsive > tbody > tr > td:nth-child(1)').each(($elm,index, $list) => {
    //     // Agarramos el texto de cada elemento de la columna 1
    //     const t = $elm.text();
    //     // Le ponemos que estamos buscando que incluya
    //         if(t.includes('Milwaukee Bucks')){
    //              cy.get('#tblcla responsive > tbody > tr > td:nth-child(1)').eq(index).next().then(function(p){
    //             const r = p.text()
    //             expect(r).to.contains('47');
    //             })
    //         }
    //     })
    // })
    it('Validando una tabla dinámica', function() {
        cy.visit('https://chercher.tech/practice/dynamic-table')
        cy.get('td','facebook.com')
        .prev()
        .find('input')
        .check()
    })
});