import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleType } from '@/5_entities/Article'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { type TabItem, Tabs } from '@/6_shared/ui/Tabs/Tabs'

interface ArticleTypeTabsProps {
    className?: string
    value: ArticleType
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props

    const { t } = useTranslation()

    const typeTabs = useMemo<Array<TabItem<ArticleType>>>(() => [
        {
            value: ArticleType.ALL,
            content: t('Всё')
        },
        {
            value: ArticleType.IT,
            content: t('Айти')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука')
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика')
        }
    ], [t])

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onChangeType}
        />
    )
})

ArticleTypeTabs.displayName = 'ArticleTypeTabs'
