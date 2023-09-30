import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/provides/ThemeProvider'
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm'

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm
}

export default meta

type Story = StoryObj<typeof LoginForm>

export const Light: Story = {}

export const Dark: Story = {}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
