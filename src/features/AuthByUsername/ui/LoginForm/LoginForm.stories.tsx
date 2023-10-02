import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { Theme } from 'app/provides/ThemeProvider'
import LoginForm from './LoginForm'

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm
}

export default meta

type Story = StoryObj<typeof LoginForm>

export const Light: Story = {}

Light.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: 'asd123'
    }
})
]

export const Dark: Story = {}

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: '123',
            password: 'asd123'
        }
    })
]

export const LightError: Story = {}

LightError.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: 'asd123',
        error: 'Error'
    }
})
]

export const DarkError: Story = {}

DarkError.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: '123',
            password: 'asd123',
            error: 'Error'
        }
    })
]

export const LightLoading: Story = {}

LightLoading.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: 'asd123',
        isLoading: true
    }
})
]

export const DarkLoading: Story = {}

DarkLoading.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: '123',
            password: 'asd123',
            isLoading: true
        }
    })
]
