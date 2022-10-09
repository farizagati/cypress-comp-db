import {SearchPage} from "./page_objects/search_page"

const searchPage = new SearchPage()
//fill your keyword here, assuming ASCI
const searchKeyword = 'ASCI'

describe('Check filter functionality Test Suite', () =>{
    beforeEach(() => {
        cy.visit('/')    
      })
    it('Filter and verify specific keyword result',() =>{
      
      searchPage.fillTextFieldSearch(searchKeyword)
      searchPage.clickSubmitSearch()
      cy.get('tbody').find('tr',searchKeyword).then((rowCells) => {

        for (let cell in rowCells){
          if (!isNaN(cell)){
            cy.log(rowCells[cell].innerText)
          }
        }
        
        })
    })
    it.only('Verify validation for blank input in search filter',() =>{
      searchPage.clickSubmitSearch()
      cy.get('input:invalid').should('have.length', 1)
      cy.get('#searchbox').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
      })

    })
 })
 