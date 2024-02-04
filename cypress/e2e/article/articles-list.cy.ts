describe('Пользователь зашел на страницу статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles')
        })
    })

    it('и статьи успешно загружаются', () => {
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })
    it('и ищет статью', () => {
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('ArticlePageFilters.Input').type('Ruby')
        cy.getByTestId('ArticleListItem.Title.Paragraph').invoke('text').should('match', /Ruby/)
    })
    it('и выбирает категорию', () => {
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('Tab.SCIENCE').click()
        cy.getByTestId('ArticleListItem.Type.Paragraph').should('have.text', 'SCIENCE')
    })
})
