import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '6_shared/config/storybook/StoreDecorator'
import { ForbiddenPage } from './ForbiddenPage'

const meta: Meta<typeof ForbiddenPage> = {
    title: '2_pages/ForbiddenPage',
    component: ForbiddenPage,
    decorators: [StoreDecorator({})]
}

export default meta

type Story = StoryObj<typeof ForbiddenPage>

export const Normal: Story = {
    args: {}
}
