import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/provides/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage
}

export default meta

type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {
    args: {}
}

Light.decorators = [StoreDecorator({})]

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
