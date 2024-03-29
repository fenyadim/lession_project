import { memo, useState } from 'react'
import StarIcon from '../../assets/icons/star.svg'
import { classNames } from '../../lib/classNames/classNames'
import { Icon } from '../Icon/Icon'
import styles from './StarRating.module.scss'

interface StarRatingProps {
    className?: string
    onSelect?: (starsCount: number) => void
    size?: number
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        selectedStars = 0,
        onSelect,
        size = 30
    } = props

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount)
        }
    }

    const onLeave = (): void => {
        if (!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount)
            setCurrentStarsCount(starsCount)
            setIsSelected(true)
        }
    }

    return (
        <div className={classNames(styles.StarRating, {}, [className])}>
            {stars.map(starNumber => (
                <Icon
                    className={classNames(styles.starIcon, {
                        [styles.hovered]: currentStarsCount >= starNumber,
                        [styles.selected]: isSelected
                    }, []
                    )}
                    key={starNumber}
                    Svg={StarIcon}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                    data-testid={`StarRating.${starNumber}`}
                    data-selected={currentStarsCount >= starNumber}
                />
            ))}
        </div>
    )
})

StarRating.displayName = 'StarRating'
