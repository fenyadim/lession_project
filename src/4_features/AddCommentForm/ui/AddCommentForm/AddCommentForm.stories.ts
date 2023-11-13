import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '6_shared/config/storybook/StoreDecorator'
import AddCommentForm from './AddCommentForm'

const meta: Meta<typeof AddCommentForm> = {
    title: '4_features/AddCommentForm',
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
