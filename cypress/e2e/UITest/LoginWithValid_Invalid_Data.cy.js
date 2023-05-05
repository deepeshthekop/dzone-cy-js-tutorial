describe("Login and Subscribe", () => {
    it("Logs in and subscibes to newsletter", () => {
        //login
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
        cy.get("#input-email").type("lambdatestnew@yopmail.com")
        cy.get("#input-password").type("Lambda123")
        cy.get("[value='Login']").click()
        //verify login
        cy.url().should("include", "index.php?route=account/account")
        cy.contains("My Account").should("be.visible")
        //subscribe to newsletter
        cy.contains("newsletter").click()
        cy.get("#input-newsletter-yes").click({force:true})
        cy.get("[value='Continue']").click()
        //verify subscription
        cy.get(".alert-success").should("contain", "Success: Your newsletter subscription has been successfully updated!")
    })
})