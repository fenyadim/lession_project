import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
    title: '6_shared/Avatar',
    component: Avatar
}

export default meta

type Story = StoryObj<typeof Avatar>

export const AvatarBig: Story = {
    args: {
        size: 150,
        src: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        alt: 'Avatar'
    }
}

export const AvatarSmall: Story = {
    args: {
        size: 50,
        src: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        alt: 'Avatar'
    }
}
