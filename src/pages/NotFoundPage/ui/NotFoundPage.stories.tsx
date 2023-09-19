import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/provides/ThemeProvider";
import NotFoundPage from "./NotFoundPage";

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]