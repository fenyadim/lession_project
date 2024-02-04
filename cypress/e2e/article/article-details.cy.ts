let currentArticleId = ''

describe('Пользователь зашел на страницу статьи', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then(article => {
            currentArticleId = article.id
            cy.visit(`articles/${article.id}`)
        })
    })

    afterEach(() => {
        cy.removeArticle(currentArticleId)
    })

    it('и видит содержание статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist')
    })
    it('и видит список рекомедаций', () => {
        cy.getByTestId('ArticleRecommendationList').should('exist')
    })
    it('и отправляет комментарии', () => {
        cy.getByTestId('ArticleDetails.Info')
        cy.getByTestId('AddCommentForm').scrollIntoView()
        cy.addComment('text')
        cy.getByTestId('CommentCard.Content').should('have.length', 1)
    })
    it('и ставит оценку', () => {
        cy.getByTestId('ArticleDetails.Info')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(5, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 5)
    })
})
