import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailComments } from './ArticleDetailComments'

const meta: Meta<typeof ArticleDetailComments> = {
    title: '2_pages/ArticleDetailComments',
    component: ArticleDetailComments
}

export default meta

type Story = StoryObj<typeof ArticleDetailComments>

export const Normal: Story = {
    args: {}
}
