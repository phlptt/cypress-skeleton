const acceptCookies = "#ccc-recommended-settings"
const openSearchButton = ".icon-search"
const searchButton = ".search__btn-submit"
const searchInput = ".search__input"

class Shared {
    clickAcceptCookiesButton() {
        cy.get(acceptCookies).click()
    }

    clickOpenSearch() {
        cy.get(openSearchButton).click()
    }

    clickSearchButton() {
        cy.get(searchButton).click()
    }

    setSearchField(text) {
        cy.get(searchInput)
            .clear()
            .type(text);
        return this
    }
}

export default Shared
