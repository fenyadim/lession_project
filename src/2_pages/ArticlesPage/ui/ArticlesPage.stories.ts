import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '6_shared/config/storybook/StoreDecorator'
import ArticlesPage from './ArticlesPage'

const meta: Meta<typeof ArticlesPage> = {
    title: '2_pages/Article/ArticlesPage',
    component: ArticlesPage,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof ArticlesPage>

export const Normal: Story = {
    args: {}
}
