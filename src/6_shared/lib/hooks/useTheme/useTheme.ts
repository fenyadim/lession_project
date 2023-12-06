import { useContext, useEffect } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localStorage'
import { Theme } from '../../../const/theme'
import { ThemeContext } from '../../../lib/context/ThemeContext'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    useEffect(() => {
        document.body.className = theme as Theme
    }, [theme])

    return { toggleTheme, theme: theme || Theme.LIGHT }
}
