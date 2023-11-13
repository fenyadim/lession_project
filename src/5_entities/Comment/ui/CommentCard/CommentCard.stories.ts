import type { Meta, StoryObj } from '@storybook/react'

import { CommentCard } from './CommentCard'

const meta: Meta<typeof CommentCard> = {
    title: '5_entities/Comment/CommentCard',
    component: CommentCard
}

export default meta

type Story = StoryObj<typeof CommentCard>

export const Normal: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello, worlds',
            user: {
                id: '1',
                username: 'Test'
            }
        },
        isLoading: false
    }
}

export const Loading: Story = {
    args: {
        isLoading: true
    }
}
