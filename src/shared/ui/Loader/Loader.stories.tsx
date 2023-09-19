import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/provides/ThemeProvider";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]