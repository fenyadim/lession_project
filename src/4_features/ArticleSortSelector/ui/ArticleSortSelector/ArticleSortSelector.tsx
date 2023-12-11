import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleSortField } from '@/5_entities/Article'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { type SortOrder } from '@/6_shared/types'
import { Select, type SelectOptions } from '@/6_shared/ui/Select/Select'
import styles from './ArticleSortSelector.module.scss'

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

    const sortFieldOption = useMemo<Array<SelectOptions<ArticleSortField>>>(
        () => [
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
        <div className={classNames(styles.ArticleSortSelector, {},
            [className])}>
            <Select
                label={t('Сортировать по')}
                options={sortFieldOption}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t('по')}
                options={orderOption}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    )
})

ArticleSortSelector.displayName = 'ArticleSortSelector'
