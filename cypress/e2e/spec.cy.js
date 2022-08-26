import HomePage from "../pages/HomePage"
import Shared from "../pages/Shared";
import SearchResults from "../pages/SearchResults";
import 'cypress-axe'

describe('Skeleton for Cypress', () => {
  it('Given I visit homepage', () => {
    const homePage = new HomePage();
    const shared = new Shared();
    homePage.navigate()
    shared.clickAcceptCookiesButton()
    cy.injectAxe()
    //cy.checkA11y()
  })

  it('When I go to search', () => {
    const shared = new Shared();
    shared.clickOpenSearch()
  })

  it('And I search for string of random characters', () => {
    const shared = new Shared();
    shared.setSearchField("eafafafafsvxfv")
    shared.clickSearchButton()
  })

  it('Then no results are found', () => {
    const searchResults = new SearchResults();
    searchResults.checkSearchResultsMessage('We couldn\'t find any results matching your search')
  })
})