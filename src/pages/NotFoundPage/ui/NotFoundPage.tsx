import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const { className } = props

    const { t } = useTranslation()

    return (
        <Page className={classNames(styles.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    )
}

export default NotFoundPage
