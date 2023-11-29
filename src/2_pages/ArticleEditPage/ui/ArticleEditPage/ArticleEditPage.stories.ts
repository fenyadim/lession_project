import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import ArticleEditPage from './ArticleEditPage'

const meta: Meta<typeof ArticleEditPage> = {
    title: '2_pages/ArticleEditPage',
    component: ArticleEditPage,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof ArticleEditPage>

export const Normal: Story = {
    args: {}
}
