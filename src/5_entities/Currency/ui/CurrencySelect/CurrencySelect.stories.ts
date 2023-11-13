import type { Meta, StoryObj } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'

const meta: Meta<typeof CurrencySelect> = {
    title: '5_entities/CurrencySelect',
    component: CurrencySelect
}

export default meta

type Story = StoryObj<typeof CurrencySelect>

export const Select: Story = {
    args: {}
}
