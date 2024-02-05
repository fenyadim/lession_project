import { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import { Button } from '@/6_shared/ui/Button/Button'
import { Card } from '@/6_shared/ui/Card/Card'
import { Drawer } from '@/6_shared/ui/Drawer/Drawer'
import { Input } from '@/6_shared/ui/Input/Input'
import { Modal } from '@/6_shared/ui/Modal/Modal'
import { HStack, VStack } from '@/6_shared/ui/Stack'
import { StarRating } from '@/6_shared/ui/StarRating/StarRating'
import { Text } from '@/6_shared/ui/Text/Text'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    onCancel?(starsCount: number): void
    onAccept?(starsCount: number, feedback?: string): void
    rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        onCancel,
        feedbackTitle,
        title,
        rate = 0,
    } = props

    const { t } = useTranslation()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(rate)
    const [feedback, setFeedback] = useState('')

    const onSelectStart = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount)
            if (feedbackTitle) {
                setIsModalOpen(true)
            } else {
                onAccept?.(selectedStarsCount)
            }
        },
        [feedbackTitle, onAccept],
    )

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
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingCard.Input"
                onChange={setFeedback}
                value={feedback}
                placeholder={t('Ваш отзыв')}
            />
        </>
    )
    return (
        <Card data-testid="RatingCard" className={className} max>
            <VStack align="center" gap="8">
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />

                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStart}
                />
            </VStack>

            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button
                                data-testid="RatingCard.Close"
                                onClick={cancelHandler}
                                theme="outline_red"
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button
                                data-testid="RatingCard.Send"
                                onClick={acceptHandler}
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
                    <VStack gap="32">
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
