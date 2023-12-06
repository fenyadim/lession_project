import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../../../config/storybook/ThemeDecorator'
import { Theme } from '../../../../const/theme'
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
