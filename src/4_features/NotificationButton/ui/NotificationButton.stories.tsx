import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import { NotificationButton } from './NotificationButton'

const meta: Meta<typeof NotificationButton> = {
    title: '4_features/NotificationButton',
    component: NotificationButton,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof NotificationButton>

export const Normal: Story = {
    args: {}
}
