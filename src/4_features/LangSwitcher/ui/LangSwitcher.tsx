import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Button } from '@/6_shared/ui/Button/Button'

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
