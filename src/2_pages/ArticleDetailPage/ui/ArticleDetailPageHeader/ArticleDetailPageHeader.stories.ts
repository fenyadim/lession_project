import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailPageHeader } from './ArticleDetailPageHeader'

const meta: Meta<typeof ArticleDetailPageHeader> = {
    title: '2_pages/ArticleDetailPageHeader',
    component: ArticleDetailPageHeader
}

export default meta

type Story = StoryObj<typeof ArticleDetailPageHeader>

export const Normal: Story = {
    args: {}
}
