import { memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleSortSelector.module.scss'
import { Select, type SelectOptions } from 'shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'
import { ArticleSortField } from 'entities/Article'
import { type SortOrder } from 'shared/types'

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeSort: (newSort: ArticleSortField) => void
    onChangeOrder: (newOrder: SortOrder) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeSort, onChangeOrder } = props

    const { t } = useTranslation()

    const orderOption = useMemo<Array<SelectOptions<SortOrder>>>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        }
    ], [t])

    const sortFieldOption = useMemo<Array<SelectOptions<ArticleSortField>>>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам')
        }
    ], [t])

    return (
        <div className={ classNames(styles.ArticleSortSelector, {},
            [className]) }>
            <Select
                label={ t('Сортировать по') }
                options={ sortFieldOption }
                value={ sort }
                onChange={ onChangeSort }
            />
            <Select
                label={ t('по') }
                options={ orderOption }
                value={ order }
                onChange={ onChangeOrder }
            />
        </div>
    )
})

ArticleSortSelector.displayName = 'ArticleSortSelector'
