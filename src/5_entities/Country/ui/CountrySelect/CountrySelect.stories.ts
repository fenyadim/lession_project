import type { Meta, StoryObj } from '@storybook/react'

import { CountrySelect } from './CountrySelect'

const meta: Meta<typeof CountrySelect> = {
    title: '5_entities/CountrySelect',
    component: CountrySelect
}

export default meta

type Story = StoryObj<typeof CountrySelect>

export const Select: Story = {
    args: {}
}
