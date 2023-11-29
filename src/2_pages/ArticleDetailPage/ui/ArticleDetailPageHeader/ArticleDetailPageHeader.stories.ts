import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import { ArticleDetailPageHeader } from './ArticleDetailPageHeader'

const meta: Meta<typeof ArticleDetailPageHeader> = {
    title: '2_pages/ArticleDetailPageHeader',
    component: ArticleDetailPageHeader,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof ArticleDetailPageHeader>

export const Normal: Story = {
    args: {}
}
