import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import { ArticlePageFilters } from './ArticlePageFilters'

const meta: Meta<typeof ArticlePageFilters> = {
    title: '2_pages/Article/ArticlePageFilters',
    component: ArticlePageFilters,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof ArticlePageFilters>

export const Normal: Story = {
    args: {}
}
