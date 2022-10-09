import {SearchPage} from "./page_objects/search_page"
import {AddComputerPage} from "./page_objects/add_computer_page"

const searchPage = new SearchPage()
const addComputerPage = new AddComputerPage()

describe('Add a new computer Test Suite', () =>{
    beforeEach(() => {
        cy.visit('/')
        searchPage.clickAddComputer()
      })
    it('Add new computer with normal flow',() =>{
        addComputerPage.fillComputerName()
        addComputerPage.fillIntroducedDate()
        addComputerPage.fillDiscontinuedDate()
        addComputerPage.selectCompanyName()
        addComputerPage.clickCreateThisComputer()
        
        //back to search page
        searchPage.verifyBannerAlertSuccessCreate()
    }),
    it.only('Test Validation with blank input computer name',() =>{
        addComputerPage.clickCreateThisComputer()
        addComputerPage.verifyErrorComputerName()
    })
 })
 