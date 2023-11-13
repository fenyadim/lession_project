import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '1_app/provides/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
    title: '3_widgets/Modal',
    component: Modal
}

export default meta

type Story = StoryObj<typeof Modal>

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Test test test'
    }
}

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Test test test'
    }
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
