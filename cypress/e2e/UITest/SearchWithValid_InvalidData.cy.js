describe("Search with Valid/Invalid Data", () => {
    beforeEach(() => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    })
    it("Searches for the text 'Apple' and displays results", () => {
        //enter valid search text and submit
        cy.get("[name='search']").eq(0).type("Apple")
        cy.get(".type-text").click()
        //verify valid search result
        cy.url().should("include", "search=Apple")
        cy.contains("Search - Apple").should("be.visible")
        cy.get(".product-layout").should("have.length.gt", 0)
    })
    it("Displays message with no search results for invalid search terms", () => {
        //enter invalid search text and submit
        cy.get("[name='search']").eq(0).type("abc")
        cy.get(".type-text").click()
        //verify invalid search result
        cy.contains("There is no product that matches the search criteria.")
    })
})