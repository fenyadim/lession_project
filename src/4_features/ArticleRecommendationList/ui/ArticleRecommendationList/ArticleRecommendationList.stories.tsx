import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendationList } from './ArticleRecommendationList'

const meta: Meta<typeof ArticleRecommendationList> = {
    title: '4_features/ArticleRecommendationList',
    component: ArticleRecommendationList
}

export default meta

type Story = StoryObj<typeof ArticleRecommendationList>

export const Normal: Story = {
    args: {}
}
