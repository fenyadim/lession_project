import type { Meta, StoryObj } from '@storybook/react'

import { ListBox } from './ListBox'
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator'
import { Theme } from '1_app/provides/ThemeProvider'

const meta: Meta<typeof ListBox> = {
    title: '6_shared/ListBox',
    component: ListBox
}

export default meta

type Story = StoryObj<typeof ListBox>

export const Normal: Story = {
    args: {
        defaultValue: 'Выберете значение',
        value: undefined,
        items: [
            {
                value: '1',
                content: '123123'
            },
            {
                value: '2',
                content: '123123'
            },
            {
                value: '3',
                content: '123123'
            },
            {
                value: '4',
                content: 'Disabled',
                unavailable: true
            }
        ]
    }
}

export const Dark: Story = {
    args: {
        defaultValue: 'Выберете значение',
        value: undefined,
        items: [
            {
                value: '1',
                content: '123123'
            },
            {
                value: '2',
                content: '123123'
            },
            {
                value: '3',
                content: '123123'
            },
            {
                value: '4',
                content: 'Disabled',
                unavailable: true
            }
        ]
    }
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const MenuDirectionTop: Story = {
    args: {
        defaultValue: 'Выберете значение',
        value: undefined,
        items: [
            {
                value: '1',
                content: '123123'
            },
            {
                value: '2',
                content: '123123'
            },
            {
                value: '3',
                content: '123123'
            },
            {
                value: '4',
                content: 'Disabled',
                unavailable: true
            }
        ],
        direction: 'top left'
    }
}

export const Readonly: Story = {
    args: {
        defaultValue: 'Выберете значение',
        value: undefined,
        items: [
            {
                value: '1',
                content: '123123'
            },
            {
                value: '2',
                content: '123123'
            },
            {
                value: '3',
                content: '123123'
            },
            {
                value: '4',
                content: 'Disabled',
                unavailable: true
            }
        ],
        readonly: true
    }
}

export const WithLabel: Story = {
    args: {
        defaultValue: 'Выберете значение',
        label: 'Это label',
        value: undefined,
        items: [
            {
                value: '1',
                content: '123123'
            },
            {
                value: '2',
                content: '123123'
            },
            {
                value: '3',
                content: '123123'
            },
            {
                value: '4',
                content: 'Disabled',
                unavailable: true
            }
        ]
    }
}
