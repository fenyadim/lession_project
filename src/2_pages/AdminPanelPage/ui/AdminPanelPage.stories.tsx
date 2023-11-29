import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/6_shared/config/storybook/StoreDecorator'
import AdminPanelPage from './AdminPanelPage'

const meta: Meta<typeof AdminPanelPage> = {
    title: '2_pages/AdminPanelPage',
    component: AdminPanelPage,
    decorators: [StoreDecorator({})]

}

export default meta

type Story = StoryObj<typeof AdminPanelPage>

export const Normal: Story = {
    args: {}
}
