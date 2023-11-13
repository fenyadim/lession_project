import type { Meta, StoryObj } from '@storybook/react'
import { ArticleSortSelector } from './ArticleSortSelector'

const meta: Meta<typeof ArticleSortSelector> = {
    title: '5_entities/Article/ArticleSortSelector',
    component: ArticleSortSelector
}

export default meta

type Story = StoryObj<typeof ArticleSortSelector>

export const Normal: Story = {
    args: {}
}
