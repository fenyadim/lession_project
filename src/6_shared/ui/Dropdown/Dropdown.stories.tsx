import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from './Dropdown'
import { Button } from '../Button/Button'
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator'
import { Theme } from '1_app/provides/ThemeProvider'

const meta: Meta<typeof Dropdown> = {
    title: '6_shared/Dropdown',
    component: Dropdown
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const Normal: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first'
            },
            {
                content: 'second'
            },
            {
                content: 'third'
            }
        ]

    }
}

export const Dark: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first'
            },
            {
                content: 'second'
            },
            {
                content: 'third'
            }
        ]

    }
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
