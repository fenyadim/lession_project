import { memo } from 'react'
import { classNames } from '6_shared/lib/classNames/classNames'
import styles from './ArticleEditPage.module.scss'
import { Page } from '3_widgets/Page/Page'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props

    const { id } = useParams<{ id: string }>()
    const { t } = useTranslation()
    const isEdit = Boolean(id)

    return (
        <Page className={ classNames(styles.ArticleEditPage, {}, [className]) }>
            { isEdit
                ? `Редактирование статьи ${id}`
                : t('Создание новой статьи')
            }
        </Page>
    )
})

export default ArticleEditPage

ArticleEditPage.displayName = 'ArticleEditPage'
