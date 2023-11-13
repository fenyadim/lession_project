import { memo } from 'react'
import { classNames } from '6_shared/lib/classNames/classNames'
import styles from './ArticleViewSelector.module.scss'
import { ArticleView } from '../../model/types/article'
import ListIcon from '6_shared/assets/icons/list.svg'
import TiledIcon from '6_shared/assets/icons/tiled.svg'
import { Button } from '6_shared/ui/Button/Button'
import { Icon } from '6_shared/ui/Icon/Icon'

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon
    }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props

    const onClick = (newView: ArticleView) => () => {
        onViewClick(newView)
    }

    return (
        <div className={ classNames(styles.ArticleViewSelector, {},
            [className]) }>
            { viewTypes.map((viewType) => (
                <Button
                    key={ viewType.view }
                    theme="clear"
                    onClick={ onClick(viewType.view) }
                >
                    <Icon
                        Svg={ viewType.icon }
                        className={ classNames('',
                            { [styles.selected]: view === viewType.view }, []) }
                    />
                </Button>
            )) }
        </div>
    )
})

ArticleViewSelector.displayName = 'ArticleViewSelector'
