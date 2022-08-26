const searchMessageField = "h2.text-center-block__title"

class SearchResults {
    checkSearchResultsMessage(expected) {
        cy.get(searchMessageField).contains(expected);
        return this
    }
}
export default SearchResults