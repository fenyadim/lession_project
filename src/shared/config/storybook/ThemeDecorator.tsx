import { Decorator } from "@storybook/react";
import { Theme } from "app/provides/ThemeProvider";

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => {
    return (
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    )
}