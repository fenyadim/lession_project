import type { Meta, StoryObj } from '@storybook/react'

import { ArticlePageFilters } from './ArticlePageFilters'

const meta: Meta<typeof ArticlePageFilters> = {
    title: 'pages/Article/ArticlePageFilters',
    component: ArticlePageFilters
}

export default meta

type Story = StoryObj<typeof ArticlePageFilters>

export const Normal: Story = {
    args: {}
}
