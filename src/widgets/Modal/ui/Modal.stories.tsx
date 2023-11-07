import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/provides/ThemeProvider'

const meta: Meta<typeof Modal> = {
    title: 'widgets/Modal',
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
