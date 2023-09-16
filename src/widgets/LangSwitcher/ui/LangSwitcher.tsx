import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './LangSwitcher.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props

  const { t, i18n } = useTranslation()

  const toggleLang = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
        <Button
            theme='clear'
            className={classNames(styles.LangSwitcher, {}, [className])}
            onClick={toggleLang}
        >
          {t('Язык')}
        </Button>
  )
}
