import type { Meta, StoryObj } from '@storybook/react'
import AdminPanelPage from './AdminPanelPage'

const meta: Meta<typeof AdminPanelPage> = {
    title: '2_pages/AdminPanelPage',
    component: AdminPanelPage
}

export default meta

type Story = StoryObj<typeof AdminPanelPage>

export const Normal: Story = {
    args: {}
}
