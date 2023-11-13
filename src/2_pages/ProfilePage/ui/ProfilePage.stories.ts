import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '1_app/provides/ThemeProvider'
import { Country } from '5_entities/Country'
import { Currency } from '5_entities/Currency'
import { StoreDecorator } from '6_shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator'
import ProfilePage from './ProfilePage'

const meta: Meta<typeof ProfilePage> = {
    title: '2_pages/ProfilePage',
    component: ProfilePage
}

export default meta

type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {
    args: {}
}

Light.decorators = [StoreDecorator({
    profile: {
        form: {
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
})
]

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
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
})
]
