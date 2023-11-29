import type { Meta, StoryObj } from '@storybook/react'
import { Country } from '@/5_entities/Country'
import { Currency } from '@/5_entities/Currency'
import { ProfileCard } from './ProfileCard'

const meta: Meta<typeof ProfileCard> = {
    title: '5_entities/ProfileCard',
    component: ProfileCard
}

export default meta

type Story = StoryObj<typeof ProfileCard>

export const Primary: Story = {
    args: {
        data: {
            first: 'Тимур',
            lastname: 'Ульби',
            age: 22,
            currency: Currency.RUB,
            country: Country.Ukraine,
            city: 'Иркутск',
            username: 'admin',
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
        }
    }
}

export const WithLoading: Story = {
    args: {
        isLoading: true
    }
}

export const WithError: Story = {
    args: {
        error: 'true'
    }
}
