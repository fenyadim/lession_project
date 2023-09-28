import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext, useEffect } from 'react'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return { toggleTheme, theme }
}
