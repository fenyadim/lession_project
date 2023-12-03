import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../../Button/Button'
import { Popover } from './Popover'

const meta: Meta<typeof Popover> = {
    title: '6_shared/Popover',
    component: Popover
}

export default meta

type Story = StoryObj<typeof Popover>

export const Normal: Story = {
    args: {
        trigger: (<Button>Открыть</Button>),
        children: (
            <div>
                <h2>Любой содержание</h2>
            </div>
        )
    }
}
