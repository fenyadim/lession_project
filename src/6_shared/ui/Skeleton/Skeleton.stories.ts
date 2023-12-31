import type { Meta, StoryObj } from '@storybook/react'
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'
import { Theme } from '../../const/theme'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
    title: '6_shared/Skeleton',
    component: Skeleton
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Normal: Story = {
    args: {
        width: '100%',
        height: 200
    }
}

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    }
}

export const NormalDark: Story = {
    args: {
        width: '100%',
        height: 200
    }
}
NormalDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    }
}
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]
