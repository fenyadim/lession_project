import type { Meta, StoryObj } from '@storybook/react'
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'
import { Theme } from '../../const/theme'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
    title: '6_shared/Input',
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
