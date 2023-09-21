import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/provides/ThemeProvider'
import MainPage from './MainPage'

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage
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
