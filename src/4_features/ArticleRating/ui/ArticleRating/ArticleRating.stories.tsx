import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import ArticleRating from './ArticleRating'

const meta: Meta<typeof ArticleRating> = {
    title: '4_features/ArticleRating',
    component: ArticleRating,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof ArticleRating>

export const Normal: Story = {
    args: {
        articleId: '1'
    }
}
