import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
    className?: string
    isShort?: boolean
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className, isShort } = props

    const { t, i18n } = useTranslation()

    const toggleLang = async (): Promise<void> => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme="clear"
            className={ classNames('', {}, [className]) }
            onClick={ toggleLang }
        >
            { t(isShort ? 'Короткий язык' : 'Язык') }
        </Button>
    )
})

LangSwitcher.displayName = 'LangSwitcher'
