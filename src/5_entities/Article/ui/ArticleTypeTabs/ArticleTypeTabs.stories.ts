import type { Meta, StoryObj } from '@storybook/react'
import { ArticleTypeTabs } from './ArticleTypeTabs'

const meta: Meta<typeof ArticleTypeTabs> = {
    title: '5_entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs
}

export default meta

type Story = StoryObj<typeof ArticleTypeTabs>

export const Normal: Story = {
    args: {}
}
