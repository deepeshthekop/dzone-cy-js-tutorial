it('GET api test random', () => {
    cy.api({
        method: 'GET',
        url: 'https://jsonplaceholder.cypress.io/comments',
    }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.length(500) //check number of items
        expect(response).to.have.property('headers')
        expect(response).to.have.property('body')
        expect(response.body[0].name).to.equal('id labore ex et quam laborum') //check first item in array
        expect(response.body[0].id).to.equal(1)
        expect(response.body[0].email).to.equal('Eliseo@gardner.biz')
        expect(response.body[0].name).to.be.a('string')
    })
})