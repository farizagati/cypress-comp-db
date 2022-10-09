export class AddComputerPage {
    fillComputerName(){
        cy.get('#name').type('Computer Name')
    }
    fillIntroducedDate(){
        cy.get('#introduced').type('1990-12-30')
    }
    fillDiscontinuedDate(){
        cy.get('#discontinued').type('1990-12-31')
    }
    selectCompanyName(){
        cy.get('#company').select('IBM')
    }
    clickCreateThisComputer(){
        cy.get('[type="submit"]').click()
    }
    verifyErrorComputerName(){
        cy.get('.input').find('.help-inline').should('contain','Failed to refine type : Predicate isEmpty() did not fail.')
    }

}