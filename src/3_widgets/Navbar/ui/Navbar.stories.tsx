import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/ThemeDecorator'
import { Theme } from '@/6_shared/const/theme'
import { Navbar } from './Navbar'

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
