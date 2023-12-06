import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'
import { Theme } from '../../const/theme'
import { Drawer } from './Drawer'

const meta: Meta<typeof Drawer> = {
    title: '6_shared/Drawer',
    component: Drawer
}

export default meta

type Story = StoryObj<typeof Drawer>

export const Normal: Story = {
    args: {
        isOpen: true
    }
}

export const Dark: Story = {
    args: {
        isOpen: true
    }
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
