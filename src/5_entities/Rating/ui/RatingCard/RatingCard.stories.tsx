import type { Meta, StoryObj } from '@storybook/react'
import { RatingCard } from './RatingCard'

const meta: Meta<typeof RatingCard> = {
    title: '5_entities/RatingCard',
    component: RatingCard
}

export default meta

type Story = StoryObj<typeof RatingCard>

export const Normal: Story = {
    args: {
        title: 'Оставьте отзыв',
        feedbackTitle: 'Отзыв'
    }
}
