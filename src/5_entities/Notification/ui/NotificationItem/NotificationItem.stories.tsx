import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/1_app/provides/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/ThemeDecorator'
import { NotificationItem } from './NotificationItem'

const meta: Meta<typeof NotificationItem> = {
    title: '5_entities/Notification/NotificationItem',
    component: NotificationItem
}

export default meta

type Story = StoryObj<typeof NotificationItem>

export const Normal: Story = {
    args: {
        item: {
            id: '1',
            title: 'Test',
            description: 'Description'
        }
    }
}

export const Link: Story = {
    args: {
        item: {
            id: '1',
            title: 'Test',
            description: 'Description',
            href: 'https://google.com'
        }
    }
}

export const Dark: Story = {
    args: {
        item: {
            id: '1',
            title: 'Test',
            description: 'Description'
        }
    }
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
