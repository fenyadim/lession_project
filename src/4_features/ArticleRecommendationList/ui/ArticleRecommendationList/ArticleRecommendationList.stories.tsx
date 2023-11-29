import type { Meta, StoryObj } from '@storybook/react'
import { type Article, ArticleType } from '@/5_entities/Article'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import { ArticleRecommendationList } from './ArticleRecommendationList'

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    user: {
        id: '1',
        username: 'Admin'
    },
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: []
}

const meta: Meta<typeof ArticleRecommendationList> = {
    title: '4_features/ArticleRecommendationList',
    component: ArticleRecommendationList
}

export default meta

type Story = StoryObj<typeof ArticleRecommendationList>

export const Normal: Story = {
    args: {}
}

Normal.decorators = [StoreDecorator({})]

Normal.parameters = {
    mockData: [
        {
            url: __API__ + '/articles?_limit=4',
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
                { ...article, id: '4' }
            ]
        }
    ]
}
