import type { Meta, StoryObj } from '@storybook/react'

import { CommentList } from './CommentList'

const meta: Meta<typeof CommentList> = {
    title: '5_entities/Comment/CommentList',
    component: CommentList
}

export default meta

type Story = StoryObj<typeof CommentList>

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello, worlds',
                user: {
                    id: '1',
                    username: 'Test'
                }
            },
            {
                id: '2',
                text: 'hello, worlds 2',
                user: {
                    id: '2',
                    username: 'Second'
                }
            }
        ]
    }
}

export const None: Story = {
    args: {}
}

export const Loading: Story = {
    args: { isLoading: true }
}
