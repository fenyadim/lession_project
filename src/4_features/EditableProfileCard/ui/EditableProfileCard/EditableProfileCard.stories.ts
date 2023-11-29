import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import { EditableProfileCard } from './EditableProfileCard'

const meta: Meta<typeof EditableProfileCard> = {
    title: '4_features/EditableProfileCard',
    component: EditableProfileCard,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof EditableProfileCard>

export const Normal: Story = {
    args: {}
}
