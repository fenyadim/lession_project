import { type FC } from 'react'
import { classNames } from '6_shared/lib/classNames/classNames'
import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from '6_shared/ui/Button/Button'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props

    const { t } = useTranslation()

    const reloadPage = (): void => {
        location.reload()
    }

    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <p>{t('Произошла ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}
