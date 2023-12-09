import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import ProfileRating from './ProfileRating'

const meta: Meta<typeof ProfileRating> = {
    title: '4_features/ProfileRating',
    component: ProfileRating,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof ProfileRating>

export const Normal: Story = {
    args: {
        profileId: '1'
    }
}
