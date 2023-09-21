import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/provides/ThemeProvider'
import { PageError } from 'widgets/PageError'

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError
}

export default meta

type Story = StoryObj<typeof PageError>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
