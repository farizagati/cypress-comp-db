export class SearchPage {
    clickAddComputer(){
        cy.get('#add').click()
    }
    fillTextFieldSearch(searchKeyword){
        cy.get('#searchbox').type(searchKeyword)
    }
    verifyBannerAlertSuccessCreate(){
        cy.get('[class="alert-message warning"').should('contain','Computer Computer Name has been created')
    }
    clickSubmitSearch(){
        cy.get('#searchsubmit').click()
    }
}