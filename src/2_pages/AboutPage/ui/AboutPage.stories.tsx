import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/1_app/provides/ThemeProvider'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/ThemeDecorator'
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
