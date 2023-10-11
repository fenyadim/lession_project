import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/provides/ThemeProvider'

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input
}

export default meta

type Story = StoryObj<typeof Input>

export const Empty: Story = {
    args: {
        value: '',
        placeholder: 'Placeholder'
    }
}

export const Text: Story = {
    args: {
        value: 'Text',
        placeholder: 'Placeholder'
    }
}

export const EmptyDark: Story = {
    args: {
        value: '',
        placeholder: 'Placeholder'
    }
}

EmptyDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TextDark: Story = {
    args: {
        value: 'Text',
        placeholder: 'Placeholder'
    }
}

TextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Readonly: Story = {
    args: {
        value: 'Text',
        placeholder: 'Placeholder',
        readonly: true
    }
}

export const ReadonlyDark: Story = {
    args: {
        value: '',
        placeholder: 'Placeholder',
        readonly: true
    }
}

ReadonlyDark.decorators = [ThemeDecorator(Theme.DARK)]
