import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '6_shared/config/storybook/StoreDecorator'
import { ArticleDetailComments } from './ArticleDetailComments'

const meta: Meta<typeof ArticleDetailComments> = {
    title: '2_pages/ArticleDetailComments',
    component: ArticleDetailComments,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof ArticleDetailComments>

export const Normal: Story = {
    args: {}
}
