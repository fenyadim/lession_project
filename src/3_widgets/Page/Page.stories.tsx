import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '6_shared/config/storybook/StoreDecorator'
import { Page } from './Page'

const meta: Meta<typeof Page> = {
    title: '3_widgets/Page',
    component: Page,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof Page>

export const Normal: Story = {
    args: {
        children: <div>Страница</div>
    }
}
