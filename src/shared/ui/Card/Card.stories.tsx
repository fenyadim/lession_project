import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '../Text/Text'
import { Card } from './Card'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/provides/ThemeProvider'

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
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
