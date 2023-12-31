import { actions } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
    title: '6_shared/Tabs',
    component: Tabs
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Normal: Story = {
    args: {
        tabs: [
            {
                value: 'tab 1',
                content: 'tab 1'
            },
            {
                value: 'tab 2',
                content: 'tab 2'
            },
            {
                value: 'tab 3',
                content: 'tab 3'
            }
        ],
        value: 'tab 2',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        onTabClick: actions('onTabClick')
    }
}
