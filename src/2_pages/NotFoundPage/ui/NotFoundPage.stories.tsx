import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/ThemeDecorator'
import { Theme } from '@/6_shared/const/theme'
import NotFoundPage from './NotFoundPage'

const meta: Meta<typeof NotFoundPage> = {
    title: '2_pages/NotFoundPage',
    component: NotFoundPage,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof NotFoundPage>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
