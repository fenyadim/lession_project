import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/ThemeDecorator'
import { Theme } from '@/6_shared/const/theme'
import MainPage from './MainPage'

const meta: Meta<typeof MainPage> = {
    title: '2_pages/MainPage',
    component: MainPage,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof MainPage>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
