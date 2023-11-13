import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator'
import { Theme } from '1_app/provides/ThemeProvider'
import MainPage from './MainPage'

const meta: Meta<typeof MainPage> = {
    title: '2_pages/MainPage',
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
