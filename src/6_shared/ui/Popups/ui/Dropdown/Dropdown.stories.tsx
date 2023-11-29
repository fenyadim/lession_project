import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/1_app/provides/ThemeProvider'
import { ThemeDecorator } from '../../../../config/storybook/ThemeDecorator'
import { Button } from '../../../Button/Button'
import { Dropdown } from './Dropdown'

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
