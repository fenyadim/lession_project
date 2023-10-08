import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/provides/ThemeProvider'
import { Button } from 'shared/ui/Button/Button'
import LightSvg from 'shared/assets/icons/light-theme.svg'
import DarkSvg from 'shared/assets/icons/dark-theme.svg'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props

    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme="clear"
            className={ classNames('', {}, [className]) }
            onClick={ toggleTheme }
        >
            { theme === Theme.DARK
                ? <LightSvg fill="#FCA836FF"/>
                : <DarkSvg fill="#d9d7d7"/> }
        </Button>
    )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'
