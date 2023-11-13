import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
    title: '6_shared/Select',
    component: Select
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '123', content: 'Первый пункт' },
            { value: '1234', content: 'Второй пункт' }
        ]
    }
}
