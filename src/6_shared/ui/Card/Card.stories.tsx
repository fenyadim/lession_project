import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/1_app/provides/ThemeProvider'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'
import { Text } from '../Text/Text'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
    title: '6_shared/Card',
    component: Card
}

export default meta

type Story = StoryObj<typeof Card>

export const Normal: Story = {
    args: {
        children: <Text text="Text Text" title="Text"/>
    }
}

export const Dark: Story = {
    args: {
        children: <Text text="Text Text" title="Text"/>
    }
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
