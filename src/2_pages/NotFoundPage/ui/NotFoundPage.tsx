import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/3_widgets/Page/Page'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import styles from './NotFoundPage.module.scss'

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
