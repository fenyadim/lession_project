import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from '@/3_widgets/Page/Page'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props

    const { id } = useParams<{ id: string }>()
    const { t } = useTranslation()
    const isEdit = Boolean(id)

    return (
        <Page className={className}>
            {isEdit
                ? `Редактирование статьи ${id}`
                : t('Создание новой статьи')
            }
        </Page>
    )
})

export default ArticleEditPage

ArticleEditPage.displayName = 'ArticleEditPage'
