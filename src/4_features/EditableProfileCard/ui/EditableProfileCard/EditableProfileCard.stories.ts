import type { Meta, StoryObj } from '@storybook/react'
import { EditableProfileCard } from './EditableProfileCard'

const meta: Meta<typeof EditableProfileCard> = {
    title: '4_features/EditableProfileCard',
    component: EditableProfileCard
}

export default meta

type Story = StoryObj<typeof EditableProfileCard>

export const Normal: Story = {
    args: {}
}
