import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '1_app/provides/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator'
import NotFoundPage from './NotFoundPage'

const meta: Meta<typeof NotFoundPage> = {
    title: '2_pages/NotFoundPage',
    component: NotFoundPage
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
