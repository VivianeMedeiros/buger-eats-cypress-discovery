

    describe('Home page', ()=> {

        it ('App deve estar on line', ()=> {

            cy.viewport(1440, 900)
            cy.visit('https://buger-eats.vercel.app')
            cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        })



    })