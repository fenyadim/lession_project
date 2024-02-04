import type { Article } from '../../../src/5_entities/Article'

const defaultArticle = {
    title: 'TEST ARTICLE',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png',
    views: 94002,
    createdAt: '26.02.2019',
    userId: '1',
    type: [
        'IT'
    ],
    blocks: []
}

export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'saddas' },
        body: article ?? defaultArticle
    }).then(resp => resp.body)
}

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: 'http://localhost:8000/articles/' + articleId,
        headers: { Authorization: 'saddas' }
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            removeArticle(articleId: string): Chainable<void>
        }
    }
}
