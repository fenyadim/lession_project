import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import { NotificationList } from './NotificationList'

const meta: Meta<typeof NotificationList> = {
    title: '5_entities/Notification/NotificationList',
    component: NotificationList,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof NotificationList>

export const Normal: Story = {
    args: {}
}
