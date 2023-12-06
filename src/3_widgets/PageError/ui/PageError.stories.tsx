import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/6_shared/config/storybook/ThemeDecorator'
import { Theme } from '@/6_shared/const/theme'
import { PageError } from './PageError'

const meta: Meta<typeof PageError> = {
    title: '3_widgets/PageError',
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
