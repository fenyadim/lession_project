import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/provides/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
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
