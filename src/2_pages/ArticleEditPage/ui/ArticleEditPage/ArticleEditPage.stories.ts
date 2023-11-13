import type { Meta, StoryObj } from '@storybook/react'

import ArticleEditPage from './ArticleEditPage'

const meta: Meta<typeof ArticleEditPage> = {
    title: '2_pages/ArticleEditPage',
    component: ArticleEditPage
}

export default meta

type Story = StoryObj<typeof ArticleEditPage>

export const Normal: Story = {
    args: {}
}
