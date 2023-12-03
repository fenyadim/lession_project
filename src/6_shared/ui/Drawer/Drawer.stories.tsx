import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/1_app/provides/ThemeProvider'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'
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
