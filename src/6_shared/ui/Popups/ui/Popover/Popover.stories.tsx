import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from './Popover'

const meta: Meta<typeof Popover> = {
    title: '6_shared/Popover',
    component: Popover
}

export default meta

type Story = StoryObj<typeof Popover>

export const Normal: Story = {
    args: {}
}
