import type { Meta, StoryObj } from '@storybook/react'
import ProfileRating from './ProfileRating'

const meta: Meta<typeof ProfileRating> = {
    title: '4_features/ProfileRating',
    component: ProfileRating
}

export default meta

type Story = StoryObj<typeof ProfileRating>

export const Normal: Story = {
    args: {}
}
