import type { Meta, StoryObj } from '@storybook/react'

import AddCommentForm from './AddCommentForm'
import { action } from '@storybook/addon-actions'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm
}

export default meta

type Story = StoryObj<typeof AddCommentForm>

export const Normal: Story = {
    args: {
        onSendComment: action('onSendComment')
    }
}

Normal.decorators = [StoreDecorator({})]
