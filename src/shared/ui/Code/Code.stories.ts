import type { Meta, StoryObj } from '@storybook/react'

import { Code } from './Code'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/provides/ThemeProvider'

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
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
            '    title: \'shared/Code\',\n' +
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
            '    title: \'shared/Code\',\n' +
            '    component: Code\n' +
            '}\n' +
            '\n' +
            'export default meta'
    }
}

NormalDark.decorators = [ThemeDecorator(Theme.DARK)]
