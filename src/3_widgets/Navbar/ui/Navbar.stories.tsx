import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator'
import { Theme } from '1_app/provides/ThemeProvider'
import { Navbar } from './Navbar'
import { StoreDecorator } from '6_shared/config/storybook/StoreDecorator'

const meta: Meta<typeof Navbar> = {
    title: '3_widgets/Navbar',
    component: Navbar
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Light: Story = {
    args: {}
}

Light.decorators = [StoreDecorator({})]

export const Dark: Story = {
    args: {}
}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({})
]

export const LightAuthUser: Story = {
    args: {}
}

LightAuthUser.decorators = [StoreDecorator({ user: { authData: {} } })]

export const DarkAuthUser: Story = {
    args: {}
}
DarkAuthUser.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } })
]
