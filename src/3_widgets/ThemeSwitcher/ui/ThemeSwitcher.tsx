import { memo } from 'react'
import { Theme, useTheme } from '@/1_app/provides/ThemeProvider'
import DarkSvg from '@/6_shared/assets/icons/dark-theme.svg'
import LightSvg from '@/6_shared/assets/icons/light-theme.svg'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Button } from '@/6_shared/ui/Button/Button'

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
