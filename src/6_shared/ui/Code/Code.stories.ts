import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'
import { Theme } from '../../const/theme'
import { Code } from './Code'

const meta: Meta<typeof Code> = {
    title: '6_shared/Code',
    component: Code
}

export default meta

type Story = StoryObj<typeof Code>

export const Normal: Story = {
    args: {
        text: 'import type { Meta, StoryObj } from \'@storybook/react\'\n' +
            '\n' +
            'import { Code } from \'./Code\'\n' +
            '\n' +
            'const meta: Meta<typeof Code> = {\n' +
            '    title: \'6_shared/Code\',\n' +
            '    component: Code\n' +
            '}\n' +
            '\n' +
            'export default meta'
    }
}

export const NormalDark: Story = {
    args: {
        text: 'import type { Meta, StoryObj } from \'@storybook/react\'\n' +
            '\n' +
            'import { Code } from \'./Code\'\n' +
            '\n' +
            'const meta: Meta<typeof Code> = {\n' +
            '    title: \'6_shared/Code\',\n' +
            '    component: Code\n' +
            '}\n' +
            '\n' +
            'export default meta'
    }
}

NormalDark.decorators = [ThemeDecorator(Theme.DARK)]
