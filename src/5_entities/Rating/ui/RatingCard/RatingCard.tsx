import { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import { Modal } from '@/3_widgets/Modal'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Button } from '@/6_shared/ui/Button/Button'
import { Card } from '@/6_shared/ui/Card/Card'
import { Drawer } from '@/6_shared/ui/Drawer/Drawer'
import { Input } from '@/6_shared/ui/Input/Input'
import { HStack, VStack } from '@/6_shared/ui/Stack'
import { StarRating } from '@/6_shared/ui/StarRating/StarRating'
import { Text } from '@/6_shared/ui/Text/Text'
import styles from './RatingCard.module.scss'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        onCancel,
        feedbackTitle,
        title
    } = props

    const { t } = useTranslation()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(0)
    const [feedback, setFeedback] = useState('')

    const onSelectStart = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount)
        if (feedbackTitle) {
            setIsModalOpen(true)
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [feedbackTitle, onAccept])

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
        <>
            <Text title={feedbackTitle}/>
            <Input onChange={setFeedback} value={feedback} placeholder={t('Ваш отзыв')}/>
        </>
    )
    return (
        <Card className={classNames(styles.RatingCard, {}, [className])}>
            <VStack align='center' gap='8'>
                <Text title={title}/>
                <StarRating size={40} onSelect={onSelectStart}/>
            </VStack>

            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap='32'>
                        {modalContent}
                        <HStack max gap='16' justify='end'>
                            <Button onClick={cancelHandler} theme='outline_red'>{t('Закрыть')}</Button>
                            <Button onClick={acceptHandler}>{t('Отправить')}</Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
                    <VStack gap='32'>
                        {modalContent}
                        <Button fullWidth onClick={cancelHandler}>
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    )
})

RatingCard.displayName = 'RatingCard'
