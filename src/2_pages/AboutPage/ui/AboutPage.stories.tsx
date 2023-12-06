import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/ThemeDecorator'
import { Theme } from '@/6_shared/const/theme'
import AboutPage from './AboutPage'

const meta: Meta<typeof AboutPage> = {
    title: '2_pages/AboutPage',
    component: AboutPage,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof AboutPage>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
